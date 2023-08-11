//A Quick and dirty vector class for creative coding.

class ZVector {
    /**
     * Vector class, takes in 2 or 3 dimensional floats.
     * @param {number} x x value of vector [defaults to 0]
     * @param {number} y y value of vector [defaults to 0]
     * @param {number} z z value of vector [defaults to 0]
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    ///////////////////////////////////////////////////////
    //  UTILITY METHODS
    //
    /**
     * @returns a clone of the vector.
    **/
    clone() {
        let newv = new ZVector(this.x, this.y, this.z);
        return newv;
    }
    /**
     * Utility
     * @returns the vector as a string.
     */
    toString() {
        if (this.z == 0) {
            return "[x = " + this.x + ", y = " + this.y + "]";
        } else {
            return "[x = " + this.x + ", y = " + this.y + ", z = " + this.z + "]";
        }
    }
    /**
     * Utility
     * @returns the vector as an object. 
     */
    toObject() {
        //
        if (this.z == 0) {
            return {
                x: this.x,
                y: this.y
            };
        } else {
            return {
                x: this.x,
                y: this.y,
                z: this.z
            };
        }
    }
    /**
     * Utility
     * @returns the vector as an array
     */
    toArray() {
        if (this.z == 0) {
            return [this.x, this.y];
        } else {
            return [this.x, this.y, this.z];
        }
    }

    ///////////////////////////////////////////////////////
    //MANIPULATION METHODS
    //
    /**
     * Set the values of the vector's components.
     * @param {number} x new X value
     * @param {number} y new Y value
     * @param {number} z new Z value [defaults to 0]
     */
    set(x, y, z = 0) {
        //
        if (typeof x == "number" && typeof y == "number") {
            this.x = x;
            this.y = y;
            this.z = z;
        } else {
            console.error("vector components must be numbers")
        }
        return this;
    }
    /**
     * Adds the vector passed as a parameter to the one calling the function.
     * @param {ZVector} v vector to be added to this vector.
     */
    add(v) {
        if (v instanceof ZVector) {
            this.x = this.x + v.x;
            this.y = this.y + v.y;
            this.z = this.z + v.z;
        } else {
            console.error("the added vector must be a ZVector too !")
        }
        return this;

    }
    /**
     * Substracts the vector passed as a parameter to the one calling the function.
     * @param {ZVector} v vector to be subtracted to this vector.
     */
    sub(v) {
        if (v instanceof ZVector) {
            this.x = this.x - v.x;
            this.y = this.y - v.y;
            this.z = this.z - v.z;
        } else {
            console.error("the added vector must be a ZVector too !")
        }
        return this;
    }
    /**
     * Multiplies the vector components by a scalar.
     * @param {number} s Scalar
     */
    mult(s) {
        if (typeof s == "number") {
            this.x = this.x * s;
            this.y = this.y * s;
            this.z = this.z * s;
        } else {
            console.error("Parameter must be a number");
        }
        return this;
    }
    /**
     * Divides the vector components by a scalar.
     * @param {number} s Scalar
     */
    div(s) {
        if (typeof s == "number") {
            this.x = this.x / s;
            this.y = this.y / s;
            this.z = this.z / s;
        } else {
            console.error("Parameter must be a number");
        }
        return this;
    }
    /**
     * Rotates the vector around an axis.
     * @param {number} ang Angle of rotation in radians
     * @param {*} ax Axis of rotation as a Zvector [Defaults to z unit vector]
     * @returns The rotated vector
     */
    rotate(ang, ax = new ZVector(0,0,1)) {
        ax.normalize();
        const sinAng = Math.sin(ang);
        const cosAng = Math.cos(ang);
        const dotProduct = this.dot(ax);
        const crossProduct = this.cross(ax);
        this.mult(cosAng).add(crossProduct.mult(sinAng)).add(ax.mult(dotProduct * (1 - cosAng)));
        return this;
    }
    /**
     * Sets the magnitude of the vector.
     * @param {number} s Scalar 
     */
    setMag(s) {
        if (typeof s == "number") {
            let m = this.getMag();
            let r = m / s;
            this.div(r);
        } else {
            console.error("Parameter must be a number");
        }
        return this
    }
    random() {
        //randomizes the vector into a 
        this.x = 1 - Math.random() * 2;
        this.y = 1 - Math.random() * 2;
        this.normalize();
    }
    /**
     * normalizes the vector to a magnitude of 1;
     */
    normalize() {
        let m = this.getMag()
        this.div(m);
    }

    //////////////////////////////////////////////////////
    //PRODUCT METHODS
    //
    dot(v) {
        //returns the dot product of two vectors.
        return (this.x * v.x + this.y * v.y + this.z * v.z)
    }
    cross(v) {
        //returns the cross product of two vectors as a ZVector.
        this.x = this.y * v.z - this.z * v.y;
        this.y = this.z * v.x - this.x * v.z;
        this.z = this.x * v.y - this.y * v.x;
        return this
    }
    getMag() {
        //retuns the magnitude of the vector as a scalar.
        return Math.round(Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) * 100000000000000) / 100000000000000;
    }
    distance(v) {
        //returns the distance between two vectors as a scalar.
        let c = this.clone()
        c.sub(v)
        return c.getMag();
    }
}

let v = new ZVector(0,1);
console.log(v.toString());
