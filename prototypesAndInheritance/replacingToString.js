function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    Person.prototype.toString = function () {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
    Teacher.prototype.toString = function () {
        return `Person (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
    Student.prototype.toString = function () {
        return `Person (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }

    return {
        Person,
        Teacher,
        Student
    }

}