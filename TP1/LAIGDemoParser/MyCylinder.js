/**
* Cylinder
* @constructor
*/
function Cylinder(scene, height, base, top, stacks, slices) {
	CGFobject.call(this,scene);

	this.surface = new MyCylinder(scene, height, base, top, stacks, slices);
	this.base = new CylinderBase(scene, base, slices);
	this.top = new CylinderBase(scene, top, slices);
};

Cylinder.prototype = Object.create(CGFobject.prototype);
Cylinder.prototype.constructor = Cylinder;


Cylinder.prototype.display = function() {

	this.surface.display();

	this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.base.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0, 1);
		this.top.display();
	this.scene.popMatrix();
}