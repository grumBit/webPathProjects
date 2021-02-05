# Misc useful examples <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Logging](#logging)
- [Time out alarm](#time-out-alarm)

<!-- /code_chunk_output -->

---

# Logging

```python
import logging

logging.basicConfig(
    format="%(asctime)s,%(msecs)d %(levelname)s [%(pathname)s:%(lineno)d - %(funcName)s() ] %(message)s",
    datefmt="%Y-%m-%d:%H:%M:%S",
    level=logging.DEBUG,
)
logger = logging.getLogger()

logger.debug("Hi")

# 2020-05-13:11:13:34,357 DEBUG [/Volumes/conjura/dev/scratch/code/play.py:10 - <module>() ] Hi
```

# Time out alarm

- Sets an alarm so that a long running task will timeout if it takes too long

```python
import logging
import signal
from time import sleep

logging.basicConfig(
    format="%(asctime)s,%(msecs)d %(levelname)s [%(pathname)s:%(lineno)d - %(funcName)s() ] %(message)s",
    datefmt="%Y-%m-%d:%H:%M:%S",
    level=logging.DEBUG,
)
logger = logging.getLogger()


class TimedOutException(Exception):
    pass


class TimeOutAble:
    def timed_out(self):
        logger.debug(f"{self} didn't do any timeout handling when it timed out.")


class TimeOutAlarm:
    @classmethod
    def create_alarm(cls, timed: TimeOutAble, needs_to_finsh_within: int):
        signal.signal(signal.SIGALRM, cls._create_signal_handler(timed))
        signal.alarm(needs_to_finsh_within)
        logger.debug(f"{timed}'s timeout alarm signal set for {timed} in {needs_to_finsh_within} seconds")

    @classmethod
    def _create_signal_handler(cls, timed: TimeOutAble):
        timed = timed

        def _timed_out_alarm_signal_handler(signum, stack):
            nonlocal timed
            logger.debug(f"Timeout alarm signal received before {timed} finished working.Stack: {stack}")
            timed.timed_out()
            raise TimedOutException(stack)

        return _timed_out_alarm_signal_handler

    @classmethod
    def cancel_alarm(cls, timed: TimeOutAble):
        signal.alarm(0)
        logger.debug(f"Timeout alarm signal for {timed} cancelled")


class Worker(TimeOutAble):
    def __init__(self, identifier: str, what_i_do: str, break_needed: int):
        self.identifier = identifier
        self.what_i_do = what_i_do
        self.break_needed = break_needed

    def __str__(self):
        return self.identifier

    def timed_out(self):
        logger.info(f"Oh man! I didn't get done in time.")

    def do_work(self, a_number_of_times: int):
        while a_number_of_times:
            logger.info(
                f"I've been working hard at {self.what_i_do} and still have {a_number_of_times} more to do, but I need a {self.break_needed} second break"
            )
            a_number_of_times -= 1
            sleep(self.break_needed)
        logger.info(f"Phew! I got {self.what_i_do} done before I was timed out.")


def run_with_a_time_limit(worker: Worker, a_number_of_times: int, within: int):
    try:
        TimeOutAlarm.create_alarm(worker, within)
        worker.do_work(a_number_of_times=a_number_of_times)
        TimeOutAlarm.cancel_alarm(worker)
        logger.info(f"Great! {worker.identifier} got {worker.what_i_do} done in time.")
    except TimedOutException:
        logger.error(
            f"Hmmm... {worker.identifier} didn't get {worker.what_i_do} done in time. I need to decide what to do next."
        )


bob = Worker(identifier="Bob", what_i_do="stuff", break_needed=2)
run_with_a_time_limit(bob, 3, 5)
run_with_a_time_limit(bob, 3, 10)
```
