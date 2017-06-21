(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#999999",
	manifest: []
};



// symbols:



(lib.Waves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP+A/IMAAAh+PMCf+AAAMAAAB+Pg");
	mask.setTransform(0.3,0);

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("APaIvQjuoskFkbQj/kXkCABQkDABjyEYQj3EcjTIo");
	this.shape.setTransform(149.7,-93.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AvCHWQCwmsDGj2QAug6AwgxQDsj7D8AOQA7ACA9ATQC5A4C4DNQD8EXDkIZ");
	this.shape_1.setTransform(147.7,-92.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AusF/QC1mYDLjfQAvg1AwgqQDmjfDxAdQA6AGA6AUQCyA9CuDHQDyETDdIF");
	this.shape_2.setTransform(145.8,-91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AuWEoQC6mGDPjGQAwgvAwglQDhjBDpAsQA3AIA3AWQCpBDCmDBQDoEPDVHy");
	this.shape_3.setTransform(143.8,-90.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("At/DSQC/lzDTitQAwgpAxgfQDailDiA8QA0ALA0AXQCgBICdC7QDfELDMHf");
	this.shape_4.setTransform(141.9,-90.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AtpB/QDElhDYiVQAwgjAxgZQDViIDaBLQAxAOAxAZQCXBNCVC1QDVEHDEHL");
	this.shape_5.setTransform(139.9,-89.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AtSAtQDJlPDch8QAxgdAygTQDOhrDSBbQAuAQAuAaQCPBSCLCwQDMECC8G5");
	this.shape_6.setTransform(138,-89.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("As8ggQDPk/DghjQAxgYAygMQDIhPDLBqQArATArAcQCGBXCCCqQDDD+CzGl");
	this.shape_7.setTransform(136,-89.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AsmhtQDUksDlhLQAygRAygHQDCgyDDB6QAoAVAoAdQB9BdB6CkQC4D6CsGS");
	this.shape_8.setTransform(134,-89.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("AsQi2QDZkZDpgyQAzgMAygBQC9gVC7CJQAlAYAlAfQB0BhBxCeQCvD3CkF/");
	this.shape_9.setTransform(132.1,-90.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("Ar5j5QDekHDtgZQAzgGAzAFQC2AIC0CYQAiAbAiAgQBrBnBoCYQCmDzCbFr");
	this.shape_10.setTransform(130.1,-91.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("ALlIvQjuoskFkbQj9kXkEABQjxABjkD0");
	this.shape_11.setTransform(128.2,-93.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("AqvlBQALgMAMgKQDJi/DUAHQDwAHDqEGQD0EMDdIG");
	this.shape_12.setTransform(128.4,-90.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3,1,1).p("Ap7lKQALgJAKgIQC6ijDEAPQDcAPDYD0QDiD+DOHg");
	this.shape_13.setTransform(128.7,-87);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("ApHlSQAKgHAKgHQCriHCzAYQDJAXDEDiQDQDvDAG6");
	this.shape_14.setTransform(128.9,-84);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("AoSlYQAJgGAJgFQCchrCiAgQC2AgCwDPQC/DhCwGU");
	this.shape_15.setTransform(129.1,-81.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("AneleQAJgEAIgDQCNhOCSAnQChApCdC9QCuDTChFt");
	this.shape_16.setTransform(129.4,-78.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3,1,1).p("AmqliQAIgCAJgBQB9gyCBAwQCOAwCKCsQCdDECRFH");
	this.shape_17.setTransform(129.6,-75.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3,1,1).p("Al2liQAIgBAHABQBugWBxA4QB7A5B2CZQCMC2CCEh");
	this.shape_18.setTransform(129.8,-73.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3,1,1).p("AlBlaQAGABAHACQBfAGBgBBQBnBBBjCIQB6CnBzD7");
	this.shape_19.setTransform(130.1,-71.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("AkNlPQAGADAGAEQBQAjBQBIQBTBJBQB2QBoCYBkDW");
	this.shape_20.setTransform(130.3,-70.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,1,1).p("ADaFFQjLmljdjZQgFgGgFgF");
	this.shape_21.setTransform(130.5,-69.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AkIlOQAGADAGAEQBOAmBOBJQBSBKBOB0QBnCXBiDS");
	this.shape_22.setTransform(130.3,-70.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,1,1).p("Ak4lYQAHABAHADQBcALBdBCQBkBDBfCEQB3ClBwD0");
	this.shape_23.setTransform(130.1,-71.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3,1,1).p("AlnlhQAHAAAHABQBqgOBsA6QB2A7BxCUQCGCyB+EX");
	this.shape_24.setTransform(129.9,-72.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3,1,1).p("AmXljQAIgBAIgBQB4goB7AzQCHA0CCClQCXC+CME6");
	this.shape_25.setTransform(129.7,-74.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3,1,1).p("AnGlgQAIgEAIgCQCGhBCKArQCZAsCUC1QCmDMCaFd");
	this.shape_26.setTransform(129.5,-77);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3,1,1).p("An2lcQAJgEAKgFQCThbCZAkQCrAlClDGQC3DZCnF/");
	this.shape_27.setTransform(129.2,-79.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3,1,1).p("AollWQAJgGAKgGQChh1CpAdQC8AdC3DWQDGDmC1Gi");
	this.shape_28.setTransform(129,-82.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3,1,1).p("ApVlPQAKgIALgIQCviOC3AVQDOAWDJDmQDWD0DDHE");
	this.shape_29.setTransform(128.8,-84.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3,1,1).p("AqElIQAKgKALgJQC9ioDGAOQDgAODbD3QDlEADRHn");
	this.shape_30.setTransform(128.6,-87.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3,1,1).p("Aq0lAQALgMAMgKQDKjCDWAGQDyAHDsEHQD1EODfIJ");
	this.shape_31.setTransform(128.4,-90.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("Ar6j6QDekHDugZQAzgGAzAFQC2AICzCYQAiAbAiAgQBsBnBoCYQCmDzCcFt");
	this.shape_32.setTransform(130.2,-91.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("AsQi2QDZkaDpgyQAygMAzgBQC9gUC7CIQAlAYAlAfQB0BiBxCeQCwD3CjGA");
	this.shape_33.setTransform(132.1,-90.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3,1,1).p("AsmhtQDUksDkhLQAygSAygGQDCgyDEB5QAoAWAoAdQB8BcB6CkQC5D7CsGT");
	this.shape_34.setTransform(134.1,-89.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3,1,1).p("As9ghQDPk+DghkQAygXAygNQDIhODLBqQArASArAcQCFBXCDCqQDCD/C1Gm");
	this.shape_35.setTransform(136,-89.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("AtTAtQDKlPDch8QAxgeAxgSQDOhsDTBbQAuAQAuAaQCOBSCMCwQDMEDC8G5");
	this.shape_36.setTransform(138,-89.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3,1,1).p("AtpB+QDElgDYiVQAwgjAxgZQDViIDaBLQAxANAxAZQCXBNCUC1QDWEHDEHN");
	this.shape_37.setTransform(139.9,-89.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3,1,1).p("AusF+QC1mYDLjfQAvg0AwgrQDmjfDxAeQA6AFA6AUQCyA+CuDHQDyETDdIF");
	this.shape_38.setTransform(145.8,-91.4);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},32).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},3).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(32));

	// Layer 4
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3,1,1).p("APaIvQjTopj3kbQjzkYkCgBQkCgBkAEXQkEEbjuIs");
	this.shape_39.setTransform(-86.8,-93.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(3,1,1).p("AvDInQDloaD8kXQCqi9Csg/QBLgcBJgDQD7gNDtD8QAsAtArA2QDKD2CzG1");
	this.shape_40.setTransform(-84.2,-92.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3,1,1).p("AutIfQDdoIDzkTQCii4CkhDQBIgdBHgGQDxgcDmDfQAtAoArAwQDPDgC4Gh");
	this.shape_41.setTransform(-81.7,-91.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(3,1,1).p("AuXIYQDVn1DqkQQCaizCchHQBEgfBEgJQDpgrDgDDQAtAjArArQDTDHC+GP");
	this.shape_42.setTransform(-79.1,-90.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(3,1,1).p("AuCISQDOnjDhkMQCSiuCVhLQBAggBAgMQDhg6DaCnQAtAdAsAmQDXCuDEF9");
	this.shape_43.setTransform(-76.6,-90.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(3,1,1).p("AtsIOQDGnRDYkIQCKipCNhPQA8giA9gQQDZhHDUCKQAtAXAsAhQDcCVDJFr");
	this.shape_44.setTransform(-74,-89.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(3,1,1).p("AtWIMQC+m/DPkFQCCijCFhTQA5gjA5gTQDShXDMBuQAtASAtAbQDhB9DOFZ");
	this.shape_45.setTransform(-71.5,-89.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(3,1,1).p("AtAILQC2msDGkBQB6ifB9hXQA2gkA1gXQDKhkDGBRQAtAMAtAWQDmBkDTFJ");
	this.shape_46.setTransform(-68.9,-89.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3,1,1).p("AsrIOQCvmaC9j+QByiZB2hbQAxgmAygaQDChzDAA0QAtAIAuAQQDqBLDZE3");
	this.shape_47.setTransform(-66.4,-89.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(3,1,1).p("AsVIUQCnmHCzj6QBriVBuhfQAtgnAugdQC6iCC6AYQAuACAuALQDvAyDeEl");
	this.shape_48.setTransform(-63.8,-90.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(3,1,1).p("Ar/IfQCfl1Cqj2QBjiQBmhjQArgoAqghQCyiQCzgFQAugDAuAFQD0AaDjET");
	this.shape_49.setTransform(-61.3,-91.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(3,1,1).p("ALrksQjpkBj4gBQkEgBj9EXQkGEbjtIs");
	this.shape_50.setTransform(-58.7,-93.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(3,1,1).p("AqzIPQDdoFDzkMQDqkFDwgHQDlgHDYDg");
	this.shape_51.setTransform(-59.1,-90);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(3,1,1).p("Ap9HwQDOneDij9QDWjzDcgQQDSgPDHDB");
	this.shape_52.setTransform(-59.5,-86.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3,1,1).p("ApHHRQC+m4DQjuQDDjhDIgXQDAgXC2Cg");
	this.shape_53.setTransform(-60,-83.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(3,1,1).p("AoRGzQCvmRC+jgQCvjOC1gfQCtggClCB");
	this.shape_54.setTransform(-60.4,-80.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(3,1,1).p("AnbGVQCglqCsjQQCci8CggoQCbgnCUBg");
	this.shape_55.setTransform(-60.8,-77.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(3,1,1).p("AmkF6QCPlECbjBQCIiqCMgwQCIgvCDBA");
	this.shape_56.setTransform(-61.2,-75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(3,1,1).p("AluFhQB/kdCKiyQB0iYB5g3QB1g4ByAh");
	this.shape_57.setTransform(-61.6,-72.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(3,1,1).p("Ak4FQQBwj2B3ikQBhiFBlhAQBjhABhAB");
	this.shape_58.setTransform(-62.1,-70.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(3,1,1).p("AkCFDQBhjPBmiVQBMhzBRhIQBRhIBQgf");
	this.shape_59.setTransform(-62.5,-69.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(3,1,1).p("ADMk3QjUDYjDGX");
	this.shape_60.setTransform(-62.9,-68.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(3,1,1).p("Aj9FDQBfjMBkiUQBLhxBPhIQBPhJBPgj");
	this.shape_61.setTransform(-62.5,-69.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(3,1,1).p("AkuFNQBtjvB0ihQBdiCBhhBQBghBBegF");
	this.shape_62.setTransform(-62.1,-70.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(3,1,1).p("AlfFcQB7kSCEivQBviSBzg6QBxg6BtAY");
	this.shape_63.setTransform(-61.8,-72);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(3,1,1).p("AmQFwQCJk1CUi8QCBijCFgzQCBgyB+A1");
	this.shape_64.setTransform(-61.4,-74.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(3,1,1).p("AnCGJQCYlZCljKQCSizCXgrQCTgsCMBT");
	this.shape_65.setTransform(-61,-76.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(3,1,1).p("AnzGjQCml8C0jXQCljFCpgkQCjgjCcBv");
	this.shape_66.setTransform(-60.6,-79.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(3,1,1).p("AokG+QC0mfDEjlQC3jVC7gdQC0gcCrCM");
	this.shape_67.setTransform(-60.2,-81.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(3,1,1).p("ApWHZQDDnCDVjyQDIjmDNgVQDFgVC7Cp");
	this.shape_68.setTransform(-59.8,-84.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(3,1,1).p("AqHH2QDRnmDlkAQDZj2DggOQDWgNDKDG");
	this.shape_69.setTransform(-59.5,-87.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(3,1,1).p("Aq4ISQDeoJD1kNQDskHDygGQDngHDZDk");
	this.shape_70.setTransform(-59.1,-90.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(3,1,1).p("AsVIUQCnmHCzj6QBriVBuhfQAugnAugdQC6iCC6AYQAtACAuALQDvAyDeEl");
	this.shape_71.setTransform(-63.8,-90.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(3,1,1).p("AtWIMQC+m/DPkFQCCijCFhTQA6gjA4gTQDShXDNBuQAtASAtAbQDgB9DOFY");
	this.shape_72.setTransform(-71.5,-89.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(3,1,1).p("AtsIOQDHnRDXkIQCKipCNhPQA8giA+gQQDYhHDUCKQAtAXAsAhQDdCVDIFr");
	this.shape_73.setTransform(-74,-89.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(3,1,1).p("AuBISQDOnjDgkMQCSiuCVhLQBAggBBgMQDhg6DZCnQAtAdAsAmQDYCuDCF8");
	this.shape_74.setTransform(-76.6,-90.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(3,1,1).p("AuXIYQDWn1DpkQQCaizCdhHQBEgfBEgJQDpgrDgDDQAsAjAsArQDTDGC9GP");
	this.shape_75.setTransform(-79.2,-90.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(3,1,1).p("AutIfQDeoIDzkTQChi4CkhDQBIgdBIgGQDxgcDmDfQAsAoArAwQDPDgC4Gg");
	this.shape_76.setTransform(-81.7,-91.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(3,1,1).p("AvCInQDloaD8kXQCpi9Csg/QBLgcBKgDQD7gNDsD8QAsAtArA2QDKD2CyG1");
	this.shape_77.setTransform(-84.3,-92.3);

	this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39}]},32).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},3).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).wait(32));

	// Layer 3
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(3,1,1).p("ADEAAImHAA");
	this.shape_78.setTransform(31.5,-37.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(3,1,1).p("AjCADQBmgFBmAAQBdAABcAE");
	this.shape_79.setTransform(31.8,-45.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(3,1,1).p("AjCAGQBmgLBmAAQBcAABdAJ");
	this.shape_80.setTransform(32.1,-53.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(3,1,1).p("AjBAKQBlgSBlgBQBdAABcAP");
	this.shape_81.setTransform(32.4,-61.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(3,1,1).p("AjBANQBlgYBkgBQBdAABdAU");
	this.shape_82.setTransform(32.8,-69.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(3,1,1).p("AjAAQQBkgfBkAAQBdAABcAZ");
	this.shape_83.setTransform(33.1,-78);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(3,1,1).p("AjAATQBkglBkAAQBcgBBdAg");
	this.shape_84.setTransform(33.4,-86.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(3,1,1).p("Ai/AXQBjgtBkAAQBcAABcAl");
	this.shape_85.setTransform(33.7,-94.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(3,1,1).p("Ai/AaQBjgzBjAAQBdAABcAq");
	this.shape_86.setTransform(34.1,-102.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(3,1,1).p("Ai+AdQBig5BjAAQBdgBBbAw");
	this.shape_87.setTransform(34.4,-110.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(3,1,1).p("Ai+AhQBihABigBQBdAABcA1");
	this.shape_88.setTransform(34.7,-118.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(3,1,1).p("AC+AYQhbg7hdAAQhiABhhBG");
	this.shape_89.setTransform(35.1,-127);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(3,1,1).p("Aj1BtQBHhvBLg3QA1gzA0AAQADAAACAAQAxADAvAuQBGAyBFBo");
	this.shape_90.setTransform(34.8,-132);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(3,1,1).p("AkuC3QBTi3BYhaQBGhcBFAAQAEAAAFABQA/AHA+BTQBTBXBOCr");
	this.shape_91.setTransform(34.6,-136.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(3,1,1).p("AlmEAQBej7BliAQBXiEBWAAQAGAAAGABQBPAKBMB5QBfB7BXDv");
	this.shape_92.setTransform(34.4,-141.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(3,1,1).p("AmfFKQBqlABxilQBoiuBoABQAHAAAIABQBfAOBaCeQBrCgBhEy");
	this.shape_93.setTransform(34.3,-146.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(3,1,1).p("AnXGTQB1mEB+jKQB5jXB4ABQAKAAAJABQBuARBqDEQB2DFBqF1");
	this.shape_94.setTransform(34.1,-151.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(3,1,1).p("AoQHcQCBnJCLjvQCKkACJABQALAAALACQB+AUB4DqQCCDqB0G4");
	this.shape_95.setTransform(33.9,-156.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(3,1,1).p("ApJIlQCNoNCYkVQCakpCbACQANAAAMACQCOAXCGEQQCOEPB+H7");
	this.shape_96.setTransform(33.7,-161.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(3,1,1).p("AqBJvQCYpSClk6QCrlSCrACQAPAAAOACQCeAbCVE2QCZE0CHI9");
	this.shape_97.setTransform(33.5,-166.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(3,1,1).p("Aq6K4QCkqWCylgQC7l7C9ACQAQAAAQADQCtAeCjFcQCmFZCRKA");
	this.shape_98.setTransform(33.3,-171.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(3,1,1).p("ALzLnQiarDixl+QjDmljPgBQjOgCjMGjQi/GFivLb");
	this.shape_99.setTransform(33.1,-176.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(3,1,1).p("Aq/K/QCkqdC0ljQC9l+C/ACQAQAAAQACQCuAfClFfQCnFcCRKH");
	this.shape_100.setTransform(33.3,-172.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(3,1,1).p("AqLJ8QCapeCnlBQCulZCvABQAOAAAPADQCgAbCYE9QCcE7CIJJ");
	this.shape_101.setTransform(33.5,-167.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(3,1,1).p("ApYI5QCPogCckfQCfk0CgACQANAAAMACQCSAYCLEbQCREYCAIO");
	this.shape_102.setTransform(33.7,-163.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(3,1,1).p("AolH3QCGniCPj9QCQkPCQABQAMAAALACQCEAWB9D4QCGD3B4HQ");
	this.shape_103.setTransform(33.8,-158.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(3,1,1).p("AnxG0QB7mjCEjbQCAjqCAABQAKAAAKACQB2ASBwDWQB7DVBvGU");
	this.shape_104.setTransform(34,-154.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(3,1,1).p("Am+FxQBwlkB5i6QBxjEBxABQAIAAAJABQBnAPBjC0QBxC0BlFW");
	this.shape_105.setTransform(34.2,-149.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(3,1,1).p("AmKEvQBmknBsiXQBiifBhABQAHAAAHABQBZAMBWCRQBmCSBdEa");
	this.shape_106.setTransform(34.3,-145.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(3,1,1).p("AlXDsQBcjoBhh2QBSh5BRAAQAGAAAFABQBMAJBIBvQBbByBVDb");
	this.shape_107.setTransform(34.5,-140.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(3,1,1).p("AkkCpQBRipBVhUQBDhUBDAAQAEAAAEAAQA9AGA7BNQBQBQBNCf");
	this.shape_108.setTransform(34.7,-136);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(3,1,1).p("AjwBnQBHhqBJgzQA0gvAygBQADAAACABQAvADAuAqQBFAvBEBh");
	this.shape_109.setTransform(34.8,-131.5);

	this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_78}]},32).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_99}]},3).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_78}]},1).to({state:[]},1).wait(32));

	// Layer 7
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(3,1,1).p("AU1AAMgppAAA");
	this.shape_110.setTransform(381.6,-37.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(3,1,1).p("A1JAAMAqTAAA");
	this.shape_111.setTransform(379.5,-37.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(3,1,1).p("A1eAAMAq9AAA");
	this.shape_112.setTransform(377.5,-37.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(3,1,1).p("A1zAAMArnAAA");
	this.shape_113.setTransform(375.4,-37.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(3,1,1).p("A2IAAMAsRAAA");
	this.shape_114.setTransform(373.3,-37.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(3,1,1).p("A2cAAMAs5AAA");
	this.shape_115.setTransform(371.2,-37.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(3,1,1).p("A2xAAMAtjAAA");
	this.shape_116.setTransform(369.1,-37.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(3,1,1).p("A3GAAMAuNAAA");
	this.shape_117.setTransform(367,-37.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(3,1,1).p("A3bAAMAu3AAA");
	this.shape_118.setTransform(364.9,-37.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(3,1,1).p("A3wAAMAvhAAA");
	this.shape_119.setTransform(362.8,-37.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(3,1,1).p("A4FAAMAwLAAA");
	this.shape_120.setTransform(360.7,-37.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(3,1,1).p("AYbAAMgw1AAA");
	this.shape_121.setTransform(358.6,-37.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(3,1,1).p("A4zAAMAxnAAA");
	this.shape_122.setTransform(356.1,-37.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(3,1,1).p("A5MAAMAyZAAA");
	this.shape_123.setTransform(353.6,-37.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(3,1,1).p("A5lAAMAzLAAA");
	this.shape_124.setTransform(351.1,-37.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(3,1,1).p("A5+AAMAz9AAA");
	this.shape_125.setTransform(348.6,-37.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(3,1,1).p("A6XAAMA0vAAA");
	this.shape_126.setTransform(346.1,-37.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(3,1,1).p("A6wAAMA1hAAA");
	this.shape_127.setTransform(343.6,-37.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(3,1,1).p("A7JAAMA2TAAA");
	this.shape_128.setTransform(341.1,-37.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(3,1,1).p("A7iAAMA3FAAA");
	this.shape_129.setTransform(338.6,-37.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(3,1,1).p("A77AAMA33AAA");
	this.shape_130.setTransform(336.1,-37.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(3,1,1).p("AcVAAMg4pAAA");
	this.shape_131.setTransform(333.6,-37.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(3,1,1).p("A79AAMA37AAA");
	this.shape_132.setTransform(335.9,-37.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(3,1,1).p("A7mAAMA3NAAA");
	this.shape_133.setTransform(338.2,-37.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(3,1,1).p("A7QAAMA2hAAA");
	this.shape_134.setTransform(340.5,-37.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(3,1,1).p("A65AAMA1zAAA");
	this.shape_135.setTransform(342.7,-37.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(3,1,1).p("A6iAAMA1FAAA");
	this.shape_136.setTransform(345,-37.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(3,1,1).p("A6MAAMA0ZAAA");
	this.shape_137.setTransform(347.3,-37.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(3,1,1).p("A51AAMAzrAAA");
	this.shape_138.setTransform(349.5,-37.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(3,1,1).p("A5eAAMAy9AAA");
	this.shape_139.setTransform(351.8,-37.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(3,1,1).p("A5HAAMAyPAAA");
	this.shape_140.setTransform(354.1,-37.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(3,1,1).p("A4xAAMAxjAAA");
	this.shape_141.setTransform(356.4,-37.2);

	this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_110}]},32).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_131}]},3).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_110}]},1).to({state:[]},1).wait(32));

	// Layer 6
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(3,1,1).p("AZiAAMgzDAAA");
	this.shape_142.setTransform(-348.9,-37.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(3,1,1).p("A55AAMAzzAAA");
	this.shape_143.setTransform(-346.5,-37.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(3,1,1).p("A6RAAMA0jAAA");
	this.shape_144.setTransform(-344.1,-37.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(3,1,1).p("A6oAAMA1RAAA");
	this.shape_145.setTransform(-341.8,-37.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(3,1,1).p("A7AAAMA2BAAA");
	this.shape_146.setTransform(-339.4,-37.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(3,1,1).p("A7YAAMA2xAAA");
	this.shape_147.setTransform(-337,-37.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(3,1,1).p("A7vAAMA3fAAA");
	this.shape_148.setTransform(-334.7,-37.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(3,1,1).p("A8HAAMA4PAAA");
	this.shape_149.setTransform(-332.3,-37.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(3,1,1).p("A8eAAMA49AAA");
	this.shape_150.setTransform(-330,-37.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(3,1,1).p("A82AAMA5tAAA");
	this.shape_151.setTransform(-327.6,-37.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(3,1,1).p("A9OAAMA6dAAA");
	this.shape_152.setTransform(-325.2,-37.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(3,1,1).p("AdmAAMg7LAAA");
	this.shape_153.setTransform(-322.9,-37.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(3,1,1).p("A9+AAMA79AAA");
	this.shape_154.setTransform(-320.4,-37.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(3,1,1).p("A+XAAMA8vAAA");
	this.shape_155.setTransform(-317.9,-37.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(3,1,1).p("A+wAAMA9hAAA");
	this.shape_156.setTransform(-315.4,-37.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(3,1,1).p("A/JAAMA+TAAA");
	this.shape_157.setTransform(-312.9,-37.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(3,1,1).p("A/iAAMA/FAAA");
	this.shape_158.setTransform(-310.4,-37.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(3,1,1).p("A/7AAMA/3AAA");
	this.shape_159.setTransform(-307.9,-37.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(3,1,1).p("EggUAAAMBApAAA");
	this.shape_160.setTransform(-305.4,-37.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(3,1,1).p("EggtAAAMBBbAAA");
	this.shape_161.setTransform(-302.9,-37.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(3,1,1).p("EghGAAAMBCNAAA");
	this.shape_162.setTransform(-300.4,-37.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(3,1,1).p("EAhgAAAMhC/AAA");
	this.shape_163.setTransform(-297.9,-37.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(3,1,1).p("EghJAAAMBCTAAA");
	this.shape_164.setTransform(-300.1,-37.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(3,1,1).p("EggyAAAMBBlAAA");
	this.shape_165.setTransform(-302.4,-37.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(3,1,1).p("EggbAAAMBA3AAA");
	this.shape_166.setTransform(-304.7,-37.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(3,1,1).p("EggEAAAMBAJAAA");
	this.shape_167.setTransform(-307,-37.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(3,1,1).p("A/uAAMA/dAAA");
	this.shape_168.setTransform(-309.2,-37.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(3,1,1).p("A/XAAMA+vAAA");
	this.shape_169.setTransform(-311.5,-37.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(3,1,1).p("A/AAAMA+BAAA");
	this.shape_170.setTransform(-313.8,-37.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(3,1,1).p("A+qAAMA9VAAA");
	this.shape_171.setTransform(-316,-37.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(3,1,1).p("A+TAAMA8nAAA");
	this.shape_172.setTransform(-318.3,-37.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(3,1,1).p("A98AAMA75AAA");
	this.shape_173.setTransform(-320.6,-37.2);

	this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_142}]},32).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_163}]},3).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_142}]},1).to({state:[]},1).wait(32));

	// String
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(3,1,1).p("EB/IAIvIk6AAQjtoskFkbQkAkXkDABQkDABjzEYQj3EcjSIoMi2kAAAQjSopj3kbQjzkYkDgBQkDgBkAEXQkFEbjtIsIlJAA");
	this.shape_174.setTransform(1.3,-93.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(3,1,1).p("Eh8MAIvIFKAAQDtosEFkbQEAkXEDABQEDABDyEYQD3EbDTIpMCwsAAAQDTooD3kcQDykYEDgBQEDgBEAEXQEFEbDtIsIE7AA");
	this.shape_175.setTransform(1.3,-93.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(3,1,1).p("Eh5QAIvIFJAAQDtosEFkbQEAkXEDABQEDABDzEYQD3EbDSIpMCq2AAAQDSooD3kcQDzkYEDgBQEDgBEAEXQEFEbDtIsIE6AA");
	this.shape_176.setTransform(1.3,-93.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(3,1,1).p("Eh2VAIvIFKAAQDtosEFkbQEAkXEDABQEDABDyEYQD3EbDTIpMCk+AAAQDTooD3kcQDykYEDgBQEDgBEAEXQEFEbDtIsIE7AA");
	this.shape_177.setTransform(1.3,-93.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(3,1,1).p("EhzZAIvIFJAAQDtosEFkbQEAkXEDABQEDABDzEYQD3EbDSIpMCfIAAAQDSooD3kcQDzkYEDgBQEDgBEAEXQEFEbDtIsIE6AA");
	this.shape_178.setTransform(1.3,-93.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(3,1,1).p("EhweAIvIFKAAQDtosEFkbQEAkXEDABQEDABDyEYQD3EbDTIpMCZQAAAQDTooD3kcQDykYEDgBQEDgBEAEXQEFEbDtIsIE7AA");
	this.shape_179.setTransform(1.3,-93.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(3,1,1).p("EhtiAIvIFJAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMCTaAAAQDTooD2kcQDzkYEDgBQEDgBEAEXQEFEbDtIsIE6AA");
	this.shape_180.setTransform(1.3,-93.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(3,1,1).p("EhqnAIvIFKAAQDtosEFkbQEAkXEDABQEDABDyEYQD3EbDTIpMCNiAAAQDTooD3kcQDykYEDgBQEDgBEAEXQEFEbDtIsIE7AA");
	this.shape_181.setTransform(1.3,-93.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(3,1,1).p("EhnrAIvIFJAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMCHsAAAQDTooD2kcQDzkYEDgBQEDgBEAEXQEFEbDtIsIE6AA");
	this.shape_182.setTransform(1.3,-93.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(3,1,1).p("EhkwAIvIFKAAQDtosEFkbQEAkXEDABQEDABDyEYQD3EbDTIpMCB0AAAQDTopD3kbQDykYEDgBQEDgBEAEXQEFEbDtIsIE7AA");
	this.shape_183.setTransform(1.3,-93.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(3,1,1).p("Ehh0AIvIFJAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMB7+AAAQDTopD2kbQDzkYEDgBQEDgBEAEXQEFEbDtIsIE6AA");
	this.shape_184.setTransform(1.3,-93.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(3,1,1).p("Ehe5AIvIFKAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpMB2GAAAQDTopD3kbQDykYEDgBQEEgBD/EXQEFEbDtIsIE7AA");
	this.shape_185.setTransform(1.3,-93.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(3,1,1).p("Ehb9AIvIFJAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMBwQAAAQDSopD3kbQDzkYEDgBQEDgBEAEXQEFEbDtIsIE6AA");
	this.shape_186.setTransform(1.3,-93.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(3,1,1).p("EhZCAIvIFKAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpMBqYAAAQDTopD3kbQDykYEDgBQEEgBD/EXQEFEbDtIsIE7AA");
	this.shape_187.setTransform(1.3,-93.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(3,1,1).p("EhWGAIvIFJAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMBkiAAAQDSopD3kbQDzkYEDgBQEDgBEAEXQEFEbDtIsIE6AA");
	this.shape_188.setTransform(1.3,-93.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(3,1,1).p("EhTLAIvIFKAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpMBeqAAAQDTopD3kbQDykYEDgBQEEgBD/EXQEFEbDtIsIE7AA");
	this.shape_189.setTransform(1.3,-93.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(3,1,1).p("EBQQAIvIk6AAQjtoskFkbQkAkXkDABQkDABjzEYQj3EbjSIpMhY0AAAQjTopj2kbQjzkYkDgBQkDgBkAEXQkFEbjtIsIlJAA");
	this.shape_190.setTransform(1.3,-93.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIIBAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMBTpAAAQDTopD2kbQDzkYEDgBQEDgBEAEXQEFEbDtIsIHNAA");
	this.shape_191.setTransform(1.3,-93.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIK5AAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpMBOdAAAQDUopD2kbQDykYEEgBQEDgBEAEXQEFEbDtIsIJgAA");
	this.shape_192.setTransform(1.3,-93.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvINxAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpMBJTAAAQDTopD2kbQDzkYEDgBQEDgBEAEXQEFEbDtIsILzAA");
	this.shape_193.setTransform(1.3,-93.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIQoAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMBEJAAAQDTopD2kbQDzkYECgBQEEgBD/EXQEGEbDtIsIOGAA");
	this.shape_194.setTransform(1.3,-93.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvITgAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMA++AAAQDTopD2kbQDzkYEDgBQEDgBEAEXQEFEbDtIsIQZAA");
	this.shape_195.setTransform(1.3,-93.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIWYAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpMA5yAAAQDUopD2kbQDzkYEDgBQEDgBEAEXQEFEbDtIsISsAA");
	this.shape_196.setTransform(1.3,-93.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIZQAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpMA0oAAAQDTopD2kbQDzkYEDgBQEDgBEAEXQEEEbDuIsIU/AA");
	this.shape_197.setTransform(1.3,-93.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIcHAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMAvdAAAQDUooD2kcQDzkYEDgBQEDgBEAEXQEFEbDsIsIXTAA");
	this.shape_198.setTransform(1.3,-93.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIe/AAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMAqTAAAQDSooD3kcQDzkYEDgBQEDgBD/EXQEGEbDtIsIZlAA");
	this.shape_199.setTransform(1.3,-93.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAh3AAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpMAlIAAAQDTooD2kcQDzkYEDgBQEDgBEAEXQEFEbDtIsIb4AA");
	this.shape_200.setTransform(1.3,-93.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAkvAAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpIf8AAQDTooD3kcQDykYEEgBQEDgBEAEXQEFEbDtIsIeLAA");
	this.shape_201.setTransform(1.3,-93.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAnmAAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpIazAAQDTooD2kcQDzkYEDgBQEDgBEAEXQEEEbDuIsMAgeAAA");
	this.shape_202.setTransform(1.3,-93.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAqeAAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpIVnAAQDTooD3kcQDykYEDgBQEEgBEAEXQEFEbDsIsMAiyAAA");
	this.shape_203.setTransform(1.3,-93.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAtWAAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpIQcAAQDTooD3kcQDzkYEDgBQEDgBEAEXQEFEbDtIsMAlEAAA");
	this.shape_204.setTransform(1.3,-93.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAwOAAAQDtosEFkbQD/kXEEABQEDABDyEYQD3EbDTIpILRAAQDUooD2kcQDzkYECgBQEEgBEAEXQEFEbDtIsMAnXAAA");
	this.shape_205.setTransform(1.3,-93.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(3,1,1).p("EBQQAIvMgpqAAAQjtoskFkbQkAkXkDABQkEABjyEYQj3EcjTIoImJAAQjRopj2kbQjzkYkDgBQkDgBkAEXQkFEbjtIsMgzFAAA");
	this.shape_206.setTransform(1.3,-93.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAwBAAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpILoAAQDUooD2kcQDzkYECgBQEEgBEAEXQEFEbDtIsMAnNAAA");
	this.shape_207.setTransform(1.3,-93.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAs9AAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpIRJAAQDTooD2kcQDzkYEDgBQEEgBD/EXQEFEbDtIsMAkxAAA");
	this.shape_208.setTransform(1.3,-93.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAp5AAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpIWqAAQDTooD3kcQDykYEDgBQEEgBD/EXQEFEbDtIsMAiUAAA");
	this.shape_209.setTransform(1.3,-93.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAm1AAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpIcKAAQDUooD2kcQDzkYEDgBQEDgBEAEXQEFEbDtIsIf3AA");
	this.shape_210.setTransform(1.3,-93.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAjxAAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMAhsAAAQDSooD3kcQDzkYEDgBQEDgBD/EXQEGEbDtIsIdaAA");
	this.shape_211.setTransform(1.3,-93.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvMAgtAAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMAnMAAAQDUooD2kcQDzkYEDgBQEDgBEAEXQEFEbDsIsIa+AA");
	this.shape_212.setTransform(1.3,-93.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIdpAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMAstAAAQDTooD3kcQDykYEDgBQEEgBD/EXQEFEbDtIsIYhAA");
	this.shape_213.setTransform(1.3,-93.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIalAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMAyOAAAQDTopD3kbQDykYEDgBQEDgBEAEXQEFEbDtIsIWEAA");
	this.shape_214.setTransform(1.3,-93.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIXhAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMA3uAAAQDUopD2kbQDzkYEDgBQEDgBEAEXQEFEbDsIsIToAA");
	this.shape_215.setTransform(1.3,-93.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIUdAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMA9QAAAQDTopD2kbQDykYEEgBQEDgBEAEXQEEEbDuIsIRKAA");
	this.shape_216.setTransform(1.3,-93.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIRZAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMBCxAAAQDTopD2kbQDzkYEDgBQEDgBEAEXQEFEbDtIsIOtAA");
	this.shape_217.setTransform(1.3,-93.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIOVAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMBIRAAAQDTopD3kbQDykYEDgBQEEgBD/EXQEFEbDtIsIMRAA");
	this.shape_218.setTransform(1.3,-93.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvILRAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMBNyAAAQDTopD3kbQDykYEDgBQEEgBD/EXQEFEbDtIsIJ0AA");
	this.shape_219.setTransform(1.3,-93.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(3,1,1).p("EhQPAIvIINAAQDtosEFkbQEAkXEDABQEDABDzEYQD2EbDTIpMBTTAAAQDTopD2kbQDzkYEDgBQEDgBEAEXQEFEbDtIsIHXAA");
	this.shape_220.setTransform(1.3,-93.2);

	this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = this.shape_214.mask = this.shape_215.mask = this.shape_216.mask = this.shape_217.mask = this.shape_218.mask = this.shape_219.mask = this.shape_220.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174}]}).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[]},1).to({state:[{t:this.shape_206}]},46).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_174}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-511.7,-150.6,1024,115);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8BuQhhAAgDhfIAAgFIAAgWQAChhBiAAID4AAQBjAAABBhIAAADIAAAJIAAAKIAAAFQgCBfhiAAg");
	this.shape.setTransform(69.1,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah8BuQhhAAgDhfIAAgFIAAgWQAChhBiAAID4AAQBjAAABBhIAAADIAAAJIAAAKIAAAFQgCBfhiAAg");
	this.shape_1.setTransform(-128.9,10.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-151.4,-0.2,243,22.1);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#63BEFA").s().p("EgvxAgSMAAAhAjMBfjAAAMAAABAjg");
	this.shape.setTransform(250.1,150.7,1,1,0,0,0,-7,-22.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.8,-33.4,611.8,413.4);


(lib.Line = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7D7D7").ss(1,2,0,3).p("EhJuAAAMCTdAAA");
	this.shape.setTransform(472,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,945.9,2);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAlYADZIgBAAMhlVAAAIAAmxMBlVAAAIABAAIAEAAQBkAAAABkIAADpQAABkhkAAgEA9yACdQAyhGAAhZQAAhgg3hJICSAAIAAFIgEA0lACdQAxhGAAhZQAAhgg3hJICEAAQg4BJAABgQAABZAxBGgEAroACdQhjAAgBhkIAAiAQABhkBjAAIBsAAQg3BJAABgQAABZAyBGg");
	this.shape.setTransform(413.5,21.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.9,0,819.1,43.5);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("AazE7IAAp1IVJAAQBkABAABjIAAGtQAABjhkABgAM5E7IAAp1INhAAIAAJ1gAyGE7IAAp1IekAAIAAJ1gEgv/AE7QhggDAAhhIAAmtQAAhjBkgBIdcAAIAAJ1g");
	this.shape.setTransform(331.9,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHZE7IAAp1IAZAAIAAJ1gAnxE7IAAp1IAbAAIAAJ1g");
	this.shape_1.setTransform(201.6,31.5);

	// Layer 1
	this.ikNode_1 = new lib.Symbol2();
	this.ikNode_1.setTransform(512.6,32.3,1,1,0,0,0,512.6,21.8);

	this.addChild(this.ikNode_1,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.9,0,819.1,63);


(lib.Button_Set_1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLDZIAAmxIAXAAIAAGxg");
	this.shape.setTransform(502.2,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMDZIAAmxIAZAAIAAGxg");
	this.shape_1.setTransform(413.1,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLDZIAAmxIAXAAIAAGxg");
	this.shape_2.setTransform(214.7,32.2);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(253.8,30.4);

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(512.6,31.5,1,1,0,0,0,512.6,31.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.addChild(this.instance_1,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,-12,848,91);


(lib.Bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Line();
	this.instance.setTransform(2.1,204,1.085,1);

	this.instance_1 = new lib.Line();
	this.instance_1.setTransform(2.1,272,1.085,1);

	this.instance_2 = new lib.Line();
	this.instance_2.setTransform(2.1,68,1.085,1);

	this.instance_3 = new lib.Line();
	this.instance_3.setTransform(138,0,0.857,1,90);

	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(954,0,0.857,1,90);

	this.instance_5 = new lib.Line();
	this.instance_5.setTransform(886,0,0.857,1,90);

	this.instance_6 = new lib.Line();
	this.instance_6.setTransform(2.1,810.6,1.085,1);

	this.instance_7 = new lib.Line();
	this.instance_7.setTransform(2.1,748,1.085,1);

	this.instance_8 = new lib.Line();
	this.instance_8.setTransform(2.1,680,1.085,1);

	this.instance_9 = new lib.Line();
	this.instance_9.setTransform(2.1,612,1.085,1);

	this.instance_10 = new lib.Line();
	this.instance_10.setTransform(2.1,544,1.085,1);

	this.instance_11 = new lib.Line();
	this.instance_11.setTransform(2.1,476,1.085,1);

	this.instance_12 = new lib.Line();
	this.instance_12.setTransform(2.1,408,1.085,1);

	this.instance_13 = new lib.Line();
	this.instance_13.setTransform(2.1,340,1.085,1);

	this.instance_14 = new lib.Line();
	this.instance_14.setTransform(2.1,136,1.085,1);

	this.instance_15 = new lib.Line();
	this.instance_15.setTransform(2.1,0,1.085,1);

	this.instance_16 = new lib.Line();
	this.instance_16.setTransform(2,0,0.857,1,90);

	this.instance_17 = new lib.Line();
	this.instance_17.setTransform(206,0,0.857,1,90);

	this.instance_18 = new lib.Line();
	this.instance_18.setTransform(70,0,0.857,1,90);

	this.instance_19 = new lib.Line();
	this.instance_19.setTransform(274,0,0.857,1,90);

	this.instance_20 = new lib.Line();
	this.instance_20.setTransform(342,0,0.857,1,90);

	this.instance_21 = new lib.Line();
	this.instance_21.setTransform(410,0,0.857,1,90);

	this.instance_22 = new lib.Line();
	this.instance_22.setTransform(546,0,0.857,1,90);

	this.instance_23 = new lib.Line();
	this.instance_23.setTransform(478,0,0.857,1,90);

	this.instance_24 = new lib.Line();
	this.instance_24.setTransform(614,0,0.857,1,90);

	this.instance_25 = new lib.Line();
	this.instance_25.setTransform(682,0,0.857,1,90);

	this.text = new cjs.Text("1.0 m ", "bold 11px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 13;
	this.text.setTransform(809.8,623.6,1.843,1.843);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlUAAIAABNAlUhMIAABMAFVBNIAAhNAFVhMIAABMIqpAA");
	this.shape.setTransform(784.2,620.7);

	this.instance_26 = new lib.Line();
	this.instance_26.setTransform(750,0,0.665,1,90);

	this.instance_27 = new lib.Line();
	this.instance_27.setTransform(1022,0,0.857,1,90);

	this.instance_28 = new lib.Line();
	this.instance_28.setTransform(818,0,0.665,1,90);

	this.instance_29 = new lib.Line();
	this.instance_29.setTransform(2.1,872.9,1.085,1);

	this.instance_30 = new lib.Symbol1("synched",0);
	this.instance_30.setTransform(625.9,474.6,1.956,1.954,0,0,0,276.1,209.2);

	this.addChild(this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.shape,this.text,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-0.6,1196.4,874.2);


// stage content:
(lib.Superposition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Graph BG
	this.instance = new lib.Bg();

	this.instance_1 = new lib.Waves();
	this.instance_1.setTransform(512,404);

	this.instance_2 = new lib.Button_Set_1();
	this.instance_2.setTransform(511.9,758.6,1.25,1.25,0,0,0,413.4,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(502.4,403.4,1196.4,874.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;