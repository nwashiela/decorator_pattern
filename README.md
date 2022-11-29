# Decorator_pattern
Decorator is a structural pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects, called decorators. Using decorators you can wrap objects countless number of times since both target objects and decorators follow the same interface.

##  Pros and Cons of decorator pattern
-  You can extend an object’s behavior without making a new subclass.
-  You can add or remove responsibilities from an object at runtime.
- You can combine several behaviors by wrapping an object into multiple decorators.

- It’s hard to remove a specific wrapper from the wrappers stack.
- The initial configuration code of layers might look pretty ugly.
- It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack.
