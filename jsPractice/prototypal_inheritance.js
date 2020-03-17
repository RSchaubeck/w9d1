Function.prototype.inherits = function(Parent, Child) {
    function Surrogate () {};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
};

Function.prototype.inherits = function (Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
};

