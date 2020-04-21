//A Quick and dirty vector class for creative coding.

class ZVector {
    //Vector class, takes in 2 or 3 dimensional floats.
    constructor(_x = 0, _y = 0, _z = 0) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }

    ///////////////////////////////////////////////////////
    //UTILITY METHODS
    //
    clone() {
        //clones the vector into a new instance.
        let newv = new ZVector(this.x, this.y, this.z);
        return newv;
    }
    toString() {
        //returns the vector in string form.
        if (this.z == 0) {
            return "[x = " + this.x + ", y = " + this.y + "]";
        } else {
            return "[x = " + this.x + ", y = " + this.y + ", z = " + this.z + "]";
        }
    }
    toObject() {
        //returns the vector in object form.
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
    toArray() {
        //returns the vector as an array.
        if (this.z == 0) {
            return [this.x, this.y];
        } else {
            return [this.x, this.y, this.z];
        }
    }

    ///////////////////////////////////////////////////////
    //MANIPULATION METHODS
    //
    set(x, y, z = 0) {
        //set the value of the vector's components.
        if (typeof x == "number" && typeof y == "number") {
            this.x = x;
            this.y = y;
            this.z = z;
        } else {
            console.error("vector components must be numbers")
        }
    }
    add(v) {
        //Adds the vector passed as a parameter to the one calling the function.
        if (v instanceof ZVector) {
            this.x = this.x + v.x;
            this.y = this.y + v.y;
            this.z = this.z + v.z;
        } else {
            console.error("the added vector must be a ZVector too !")
        }

    }
    sub(v) {
        //Substracts the vector passed as a parameter to the one calling the function.
        if (v instanceof ZVector) {
            this.x = this.x - v.x;
            this.y = this.y - v.y;
            this.z = this.z - v.z;
        } else {
            console.error("the added vector must be a ZVector too !")
        }
    }
    mult(s) {
        //Multiplies the vector components by a scalar.
        if (typeof s == "number") {
            this.x = this.x * s;
            this.y = this.y * s;
            this.z = this.z * s;
        } else {
            console.error("Parameter must be a number");
        }

    }
    div(s) {
        //Divides the vector components by a scalar.
        if (typeof s == "number") {
            this.x = this.x / s;
            this.y = this.y / s;
            this.z = this.z / s;
        } else {
            console.error("Parameter must be a number");
        }
    }
    rotate() {

    }
    setMag(s) {
        //sets the magnitude of the vector
        if (typeof s == "number") {
            let m = this.getMag();
            let r = m / s;
            this.div(r);
        } else {
            console.error("Parameter must be a number");
        }
    }
    random() {
        //randomizes the vector into a 
        this.x
    }
    normalize() {
        //normalizes the vector to a magnitude of 1 aka a "unit vector".
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
        let nx = this.y * v.z - this.z * v.y;
        let ny = this.z * v.x - this.x * v.z;
        let nz = this.x * v.y - this.y * v.x;
        return new ZVector(nx, ny, nz);
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
