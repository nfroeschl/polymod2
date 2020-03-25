class Set {
	constructor() {
		this.inputs = [];
		this.hardcodedPoly = false;
		this.poly = false;
		this.checkNum = 0;
		this.confirmed = false;
	}
}

var sets = {};

sets.b = new Set();
sets.c = new Set();
sets.d = new Set();
sets.e = new Set();
sets.f = new Set();
sets.g = new Set();
sets.h = new Set();
sets.i = new Set();
sets.j = new Set();
sets.k = new Set();
sets.l = new Set();
sets.m = new Set();
sets.g.hardcodedPoly = true;

sets.b.inputs.push(sets.c);
sets.c.inputs.push(sets.d);
sets.d.inputs.push(sets.e);
sets.e.inputs.push(sets.f);
sets.f.inputs.push(sets.g);
sets.d.inputs.push(sets.h);
sets.h.inputs.push(sets.i);
sets.i.inputs.push(sets.j);
sets.j.inputs.push(sets.k);
sets.k.inputs.push(sets.c);
sets.j.inputs.push(sets.l);
sets.l.inputs.push(sets.m);
sets.l.inputs.push(sets.l);
sets.d.inputs.push(sets.d);

var checkNum = 0;
function checkSet(set) {
	var i;
	set.checkNum ++;
	if(set.hardcodedPoly) {
		set.poly = true;
		set.confirmed = true;
	}
	var allMono = true;
	var allInputsConfirmed = true;
	for(i=0;i<set.inputs.length;i++) {
		var inputSet = set.inputs[i];
		if(inputSet.checkNum == checkNum && inputSet != set) checkSet(inputSet);
		if(inputSet.poly) allMono = false;
		if(!inputSet.confirmed) allInputsConfirmed = false;
	}
	if(!allMono) {
		set.poly = true;
		set.confirmed = true;
	}
	if(allInputsConfirmed) set.confirmed = true;
}

while(checkNum<2) {
	checkSet(sets.b);
	checkNum ++;
}
console.log(sets);
