class MyClass:
    def method(self):
        return "instance method called", self

    @classmethod
    def classmethod(cls):
        return "class method called", cls

    @staticmethod
    def staticmethod():
        return "static method called"


obj = MyClass()

print("\nObject methods;")
print(obj.method(), "- used dot syntax syntax sugar to call an INSTANCE method")
print(MyClass.method(obj), "- no syntax sugar, same result.")
print(" - Note that with dot syntax, Python automatically passed in obj as 'self' argument to the instance method,")
print("   whereas without the dot syntax, obj had to passed in.")

print("\n@classmethods;")
print(obj.classmethod(), "- used dot syntax syntax sugar to call a CLASS method")
print(MyClass.classmethod(), "- no syntax sugar, same result.")
print(
    " - Note @classmethods do not take in an object reference  => obj.classmethod() cannot access or modify obj's state"
)
print(" - Also note the first argument to an @classmethod is automatically populated with a reference to the CLASS")

print("\n@staticmethods;")
print(obj.staticmethod(), "- used dot syntax syntax sugar to call a STATIC method")
print(MyClass.staticmethod(), "- no syntax sugar, same result.")
print(
    " - Note staticmethod() has neither class or object reference => @staticmethods can access neither class or object states"
)


print("\nPizza Factories With @classmethod;")


import math


class Pizza:
    def __init__(
        self, ingredients=[], radius=10,
    ):
        self.ingredients = ingredients
        self.radius = radius

    # def __repr__(self):
    #     return f"Pizza({self.ingredients!r})"

    @classmethod
    def margherita(cls):
        return cls(["mozzarella", "tomatoes"])

    @classmethod
    def prosciutto(cls):
        return cls(["mozzarella", "tomatoes", "ham"])

    def __repr__(self):
        return f"Pizza(ingredients: {self.ingredients!r}), radius={self.radius!r})"

    def area(self):
        return self.circle_area(self.radius)

    @staticmethod
    def circle_area(r):
        return r ** 2 * math.pi


print("\nCreating pizza objects, by passing all the ingredients to the constructor '__init__';")
print(Pizza(["mozzarella", "tomatoes"]))
print(Pizza(["mozzarella", "tomatoes", "ham", "mushrooms"]))
print(Pizza(["mozzarella"] * 4))

print("\nCreating piazza objects using class factory methods;")
print(Pizza.margherita())
print(Pizza.prosciutto())
print(
    " - Note the definitions of the factory constructors did not need the class name => if class name changed, these methods do not have to renamed as well."
)
print(
    " - Also note the factory methods have a reference to the class (i.e. 'cls'), so they can call the '__init__' constructor to do the work."
)
print(
    " - Also note Python only allows one '__init__' constructor to be defined, so @classmethods must be used for alternate constructor signatures."
)

print("\nWhen To Use Static Methods;")
my_pizza = Pizza.prosciutto()
print(
    "Pizza area:",
    my_pizza.area(),
    " - The @staticmethod was used to factor out a function that doesn't modify the class or objects in any way",
)
print(
    " - Note using @staticmethods and @classmethods are ways to communicate developer intent while enforcing that intent enough to avoid most slip of the mind mistakes and bugs that would break the design."
)

print(
    """
    
Key Takeaways;

    - Instance methods need a class instance and can access the instance through self.
    - Class methods don’t need a class instance. They can’t access the instance (self) but they have access to the class itself via cls.
    - Static methods don’t have access to cls or self. They work like regular functions but belong to the class’s namespace.
    - Static and class methods communicate and (to a certain degree) enforce developer intent about class design. This can have maintenance benefits.
"""
)

