function parseCount(value) {
    if (Number.isNaN(Number.parseFloat(value))) {
        throw Error("Невалидное значение")
    }
    return Number.parseFloat(value)
}

function validateCount(value) {
    try {
        parseCount(value);
    } catch (error) {
        return error
    }
    return parseCount(value);
}

class Triangle {
    constructor(a, b, c) {
        if (a+b<c || a+c<b || b+c<a) {
            throw Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return Number(this.a + this.b + this.c);
    }

    get area() {
        let pp = this.perimeter / 2;
        return Number(Math.sqrt(pp*(pp-this.a)*(pp-this.b)*(pp-this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        let new_triangle = Triangle(a, b, c)
        return new_triangle
    } catch (error) {
        return Object = {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get are() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}