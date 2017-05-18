var GasPart = (function () {
	function GasPart(molecule, radius, mass, timeStep) {
		this.molecule = molecule;
		this.mass = mass;
		this.step = timeStep;
		this.temperature = 100;
		this.position = new Vector();
		this.radius = radius;
		this.velocity = new Vector();
	    this.m_theta=0;
		this.m_xp=0;
		this.m_yp=0;

		this.m_xp0=0 ;
		this.m_yp0=0;
		
        this.m_vxp0=0 ;
		this.m_vyp0=0;
		
		this.m_vxp=0;
     	this.m_vyp=0;
		
		
		
	}
	GasPart.prototype = {};
	GasPart.prototype.constructor = GasPart;

	Object.defineProperty(GasPart.prototype, "velocityMagnitude", {
		get: function () {
			return Number(this.velocity.magnitude());
		}
	});

	GasPart.prototype.reset = function (position, velocity) {
		this.position.set(position.x, position.y);
		P = new Vector();
		V = new Vector();
		oP = new Vector();
		oV = new Vector();
		u = new Vector();
		v = new Vector();

		this.molecule.x = this.position.x;
		this.molecule.y = this.position.y;
		this.angle = getRandomNum(0, 360) * Math.PI / 180;
		this.m_gSpeed=Model.pixelToPoint(velocity)
		Vector.components(velocity, this.angle, this.velocity);
	};

	
	GasPart.prototype.propagate = function (temperature) {
		this.temperature = (temperature / 100) || 1;
		temperature = (temperature / 100) || 1;

		this.position.x += this.velocity.x * this.step //* temperature;
		this.position.y += this.velocity.y * this.step //* temperature;

		this.molecule.x = this.position.x;
		this.molecule.y = this.position.y;
	}

	GasPart.prototype.wallCollision = function (boundary) {

		if (this.position.x - this.radius <= boundary.x) {
			this.position.x = boundary.x + this.radius;
			this.velocity.x = -this.velocity.x;
			this.m_vxp=Model.pixelToPoint(this.velocity.x)
		}
		if (this.position.y - this.radius <= boundary.y) {
			this.position.y = boundary.y + this.radius;
			this.velocity.y = -this.velocity.y;
			this.m_vyp=Model.pixelToPoint(this.velocity.y)
		}
		if (this.position.x + this.radius >= boundary.x + boundary.width) {
			this.position.x = boundary.x + boundary.width - this.radius;
			this.velocity.x = -this.velocity.x;
			this.m_vxp=Model.pixelToPoint(this.velocity.x)
		}
		if (this.position.y + this.radius >= boundary.y + boundary.height) {
			this.position.y = boundary.y + boundary.height - this.radius;
			this.velocity.y = -this.velocity.y;
			this.m_vyp=Model.pixelToPoint(this.velocity.y)
		}
		
		
		this.molecule.x = this.position.x;
		this.molecule.y = this.position.y;
	}

	
	var P = new Vector();
	var V = new Vector();
	var oP = new Vector();
	var oV = new Vector();
	var u = new Vector();
	var v = new Vector();
    GasPart.prototype.collide = function (molecule) {

	
        //dl// Physics is easier, faster, and more fun using vector math.

        // the elastic collision formula is made much simpler computing
        // the changes to velocities instead of the absolute velocities:
        //
        // our conservation of momentum and energy equations:
        //
        // m1 v1 + m2 v2 == m1 v1' + m2 v2'
        // 1/2 m1 v1^2 + 1/2 m2 v2^2 == 1/2 m1 v1'^2 + 1/2 m2 v2'^2
        //
        // the usual solution for resulting velocities v1' and v2':
        //
        // v1' = (m1 v1 - m2 v1 + 2 m2 v2) / (m1 + m2)
        // v2' = (m2 v2 - m1 v2 + 2 m1 v1) / (m1 + m2)
        //
        // a simpler solution for changes to velocities v1' - v1 and v2' - v2:
        //
        // (v1' - v1) = 2 m2 (v2 - v1) / (m1 + m2)
        // (v2' - v2) = 2 m1 (v1 - v2) / (m1 + m2)
        //
        // the common factor is the partial impulse:  2 (v1 - v2) / (m1 + m2), so:
        // 
        // the change to v1 = -m2 partial impulse
        // the change to v2 = +m1 partial impulse

        // the simapp calls we use are simple vector addition, multiplication, and scalar reciprocal.
        // do not let the densely-packed style of the original code fool you, it is very inefficient.
        // we eliminate 3 arctangent, 2 square root, 6 cosine, and 6 sine calls of the original code.
 
        // first, get mass, and construct position and velocity vectors for both particles.

		
       var M = this.mass;
       var P=new Vector( this.position.x, this.position.y);
       var V= new Vector( Model.pixelToPoint(this.velocity.x), Model.pixelToPoint(this.velocity.y));
       var oM = molecule.mass;
       var oP=new Vector( molecule.position.x, molecule.position.y);
       var oV= new Vector( Model.pixelToPoint(molecule.velocity.x), Model.pixelToPoint(molecule.velocity.y));


        // next we'll need a couple of working vectors and scalars.
        // made the static - no memory is good memory - eli
        var r, d;
          //console.log(this.radius)
        d = this.radius* this.radius;         // d = minimum distance between centers, squared
       // d += this.radius + this.radius + 1;    // one pixel outset to accomodate low time resolution physics
        d = Model.pixelToPoint(d);    // one pixel outset to accomodate low time resolution physics

        // now construct a vector u, by vector subtraction of the particle positions.
        // this vector u would usually be normalized, by scaling it by the inverse
        // of its magnitude, requiring a square root call.  u then becomes the axis
        // on which all interaction takes place.  we project the velocity difference
        // onto u to find the convergence speed, then we scale u by the resulting
        // impulse to construct a reaction vector.  the subsequent multiplies square
        // the square root, allowing us to work with the unnormalized u instead, and
        // use the intermediate quantities that we need to compute for logic, anyway.
        // normalization of u actually manifests as the quadratic form: (u u) / u^2

        var u=Vector.subtract(P, oP);                // u = p1 - p2, position difference vector 	                      // r = u^2, distance between centers, squared
		r =(u.dot(u));                      // r = u^2, distance between centers, squared
	    if (r < d) {                                // if distance squared less than minimum allowable
         
		 var v=Vector.subtract( V, oV);                  // v = v1 - v2, velocity difference vector
         d = u.dot(v);               // d = (u v), magnitude of projection of v onto u
		 if (d < 0) {                            // if the two particles are converging
               // d *= 2 * simapp.inv(r * (M + oM));  // d = 2 (u v) / (u^2 * (m1 + m2))
                d *= 2 * (1/(r * (M + oM)));  // d = 2 (u v) / (u^2 * (m1 + m2))			 
			  // simapp.muladd2(V, V, -oM * d, u);   // v1 -= 2 (u v u / u^2) m2 / (m1 + m2)
              // simapp.muladd2(oV, oV, M * d, u);   // v2 += 2 (u v u / u^2) m1 / (m1 + m2)
			   V   =V.subtract(u.multiply(d*oM))
			   oV   =oV.add(u.multiply(d*M)) 			   
			} else
                {return false;}
        } else
           { return false;}

     /* 	 m_vxp = V[simapp.X];
     	m_xp0 = m_xp;
        m_vxp0 = m_vxp;
     	m_vyp = V[simapp.Y];
     	m_yp0 = m_yp;
        m_vyp0 = m_vyp;
        m_gSpeed = simapp.mag2(V);
		//console.log(m_gSpeed," d")	
        restartClock();	*/

		this.velocity.x = Model.pointToPixel(V.x);
		this.m_vxp=V.x
     	this.m_xp0 = this.position.x;
        this.m_vxp0 = this.m_vxp
     	this.velocity.y = Model.pointToPixel(V.y);
		this.m_vyp=V.y
     	this.m_yp0 = this.position.y;
        this.m_vyp0 = this.m_vyp
		this.m_gSpeed=V.magnitude();  
     
        //restartClock(); 

        	/* SOGasPart otherGP = (SOGasPart)otherSO;
	     	otherGP.m_vxp = oV[simapp.X];
	     	otherGP.m_xp0 = otherGP.m_xp;
	        otherGP.m_vxp0 = otherGP.m_vxp;
	     	otherGP.m_vyp = oV[simapp.Y];
	     	otherGP.m_yp0 = otherGP.m_yp;
	        otherGP.m_vyp0 = otherGP.m_vyp;
	        otherGP.m_gSpeed = simapp.mag2(oV);
		   //otherGP.restartClock(); */

        molecule.velocity.x = Model.pointToPixel(oV.x);
		molecule.m_vxp=oV.x
     	molecule.m_xp0 =molecule.position.x;
        molecule.m_vxp0 = oV.x
     	molecule.velocity.y = Model.pointToPixel(oV.y);
		molecule.m_vyp=oV.y
     	molecule.m_yp0 = molecule.position.y;
        molecule.m_vyp0 = oV.y
		molecule.m_gSpeed=oV.magnitude();
		
        return true;
  }

	GasPart.prototype.updateVelFromSpeed = function () {
    	V.x = this.m_vxp;
     	V.y = this.m_vyp;	
        this.m_theta = V.magnitude() > 0 ? V.angle(true) : Math.random() * 2 * Math.PI;
     	this.m_vxp = Math.cos(this.m_theta) * this.m_gSpeed;
		this.velocity.x = Model.pointToPixel(this.m_vxp);	
     	this.m_xp0 = this.position.x;
        this.m_vxp0 = this.m_vxp;
     	this.m_vyp = Math.sin(this.m_theta) * this.m_gSpeed;
		this.velocity.y = Model.pointToPixel(this.m_vyp);
     	this.m_yp0 = this.position.y;
        this.m_vyp0 = this.m_vyp;
      //  restartClock();
	}
	
	
	
	
	
/* 	GasPart.prototype.collide = function (molecule) {
		var dx = this.position.x - molecule.position.x;
		var dy = this.position.y - molecule.position.y;
		var distance = Math.hypot(dx, dy);
		
		if (distance <= (this.radius + molecule.radius)) {
			 var n = Vector.subtract(this.position, molecule.position).divide(distance);
			var p = 2 * (this.velocity.dot(n) - molecule.velocity.dot(n)) / (this.mass + molecule.mass);
			this.velocity = this.velocity.subtract(n.multiply(p * this.mass));
			molecule.velocity = molecule.velocity.add(n.multiply(p * molecule.mass));  */
			
			/* var midpoint =this.position.add(molecule.position).divide(2);
			var angle = this.position.angleTo(molecule.position);
			var v = Vector.components(this.radius, angle);
			this.position = Vector.add(midpoint, v)//midpoint.add(v);
			molecule.position = Vector.subtract(midpoint, v)//midpoint.subtract(v); */
			
			
						
			/* if((this.velocity.x>0 &&  molecule.velocity.x<0) ||  (this.velocity.x<0 && molecule.velocity.x>0))
			{
			var tempVelx=this.velocity.x
			this.velocity.x= molecule.velocity.x
			 molecule.velocity.x= tempVelx

			}

			if((this.velocity.y >0 && molecule.velocity.y<0) ||(this.velocity.y<0 && molecule.velocity.y>0)) 
			{
			var tempVely=this.velocity.y
			this.velocity.y= molecule.velocity.y
			molecule.velocity.y= tempVely
			
			} */
    /*        return true;
			
		}
		return false;
	} */

	createjs.EventDispatcher.initialize(GasPart.prototype);

	return GasPart;
})();