# Sequence <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

- Sequence is an abstract class that only requires implementation for create and append and is a base class for the other Python collections
- See [SequenceFile.py](SequenceFile.py) and [SequenceFileTest.py](SequenceFileTest.py) for an extending Sequence example that creates a filed-back store. It implements the required;
  - `__init__`
  - `__getitem__` - Example of the hard part. Note it's recursive handling of slice argument
  - `__len__`
  - `append`
