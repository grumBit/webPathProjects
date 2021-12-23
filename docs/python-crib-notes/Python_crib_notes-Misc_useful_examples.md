# Misc useful examples <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [MyPy type hints](#mypy-type-hints)
  - [Cheat Sheet](#cheat-sheet)
  - [Determining type hints `reveal_type()`](#determining-type-hints-reveal_type)
  - [ignore a single line of code `# type: ignore`](#ignore-a-single-line-of-code--type-ignore)
  - [return `cast('2018-01-01' as date)`](#return-cast2018-01-01-as-date)
- [functional `dispatch` pattern, with MyPy type hints using Enum](#functional-dispatch-pattern-with-mypy-type-hints-using-enum)
  - [dispatcher](#dispatcher)
  - [type hinting linty goodness](#type-hinting-linty-goodness)
  - [type hinting linty not-so-goodness](#type-hinting-linty-not-so-goodness)
- [Formatting binary json blobs](#formatting-binary-json-blobs)
  - [Convert binary blob to dict - `json.dumps( myblob, indent=4)`](#convert-binary-blob-to-dict---jsondumps-myblob-indent4)
  - [dumps() via dict - `json.dumps( json.loads(json_blob), indent=2, sort_keys=True)`](#dumps-via-dict---jsondumps-jsonloadsjson_blob-indent2-sort_keystrue)
  - [Pretty Printing via dict - `PrettyPrinter().pprint(json.loads(json_blob))`](#pretty-printing-via-dict---prettyprinterpprintjsonloadsjson_blob)
- [Logging](#logging)
- [Swap variable in place](#swap-variable-in-place)
- [Time out alarm](#time-out-alarm)
- [The "timeit" module to measure the execution time of small bits of Python code](#the-timeit-module-to-measure-the-execution-time-of-small-bits-of-python-code)

<!-- /code_chunk_output -->

---

# MyPy type hints

## [Cheat Sheet](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html)

## Determining type hints `reveal_type()`

```python
# To find out what type mypy infers for an expression anywhere in
# your program, wrap it in reveal_type().  Mypy will print an error
# message with the type; remove it again before running the code.

reveal_type(1)  # -> Revealed type is "builtins.int"
```

## ignore a single line of code `# type: ignore`

## return `cast('2018-01-01' as date)`

```python

from typing import cast

def my_func() -> date:
    return cast('2018-01-01' as date)
```

# functional `dispatch` pattern, with MyPy type hints using Enum

- Quick overview of classes:
  - `ReportType` Enum gives a set of valid types
  - `Report` is the thing we want fetched
  - `ReportClient` does the work of fetching reports

## dispatcher

The dispatcher is;

- a dict whose values are functions
- defined in `_fetch_report` in `ReportClient`
- called by `fetch_report()` with `self._fetch_report[self.report_type](self, start_date, end_date)`
- type hinted with `_fetch_report: dict[ReportType, Callable[[ReportClient, datetime, datetime], Report]]`

## type hinting linty goodness

```python
_fetch_report: dict[ReportType, Callable[[ReportClient, datetime, datetime], Report]]

fetch_report(self, start_date: datetime, end_date: datetime) -> Report)
```

If the dispatch dict has strong type-hinting, then the dispatcher will have a well-typed API;

- The dictionary's key typing means the dispatch selector is always the same: `ReportType`
- The dictionary's value typing means only suitable type-matched functions can be added
- The called function's typing means requesters must provide the right types of arguments, and use the correct argument naming: `fetch_report(self, start_date: datetime, end_date: datetime) -> Report)`
- Requestees must always accept the right types and numbers of arguments: `datetime, datetime`
- Requestees must return the right type of response: `Report`

In addition to the well-typed API, linting also means;

- Requestee functions can all be found in the `ReportClient` class : `Callable[[ReportClient,`
  - Although there is nothing to prevent them delegating else where
- Requestees functions' signitures will always be: `(datetime, datetime) -> Report:`

## type hinting linty not-so-goodness

- The type hinting doesn't extend to  argument naming.  If requesters give incorrect names, it will not be picked up by the linter and will blow up at runtime.

```python
from __future__ import annotations

from datetime import datetime, timedelta
from enum import Enum
from typing import Callable, List

class ReportType(Enum):
    INVOICE = "invoice"
    CAMPAIGN = "campaign"

    @classmethod
    def values(cls) -> List:
        return [member.value for member in cls]

class Report():

    def __init__(self, report_type: ReportType, content: dict):
        self.report_type = report_type
        self.content = content

class ReportClient():

    report_type: ReportType

    def __init__(self, report_type: ReportType) -> None:
        self.report_type = report_type

    def _fetch_campaign_report(self, start: datetime, end: datetime ) -> Report:
        return Report(ReportType.CAMPAIGN, {"campaign" : f"My campaign report from {start}, to {end}"})

    def _fetch_invoice_report(self, start: datetime, end: datetime ) -> Report:
        return Report(ReportType.INVOICE, {"invoice" : f"My invoice report from {start}, to {end}"})

    _fetch_report: dict[ReportType, Callable[[ReportClient, datetime, datetime], Report]] = {
        ReportType.CAMPAIGN: _fetch_campaign_report,
        ReportType.INVOICE: _fetch_invoice_report,
    }

    def fetch_report(self, start_date: datetime, end_date: datetime) -> Report:
        return self._fetch_report[self.report_type](self, start_date, end_date)


client = ReportClient(ReportType("campaign"))
client = ReportClient(ReportType.INVOICE)
report = client.fetch_report(datetime.now() - timedelta(days=14), datetime.now())
report = client.fetch_report(bad_start_name=datetime.now() - timedelta(days=14), bad_end_name=datetime.now()) # This will blow up at runtime because the argument names are incorrect

print(report.content)
```

# Formatting binary json blobs

## Convert binary blob to dict - `json.dumps( myblob, indent=4)`

```python
import json

my_blob=b'{"connector_input": {"pk": 23, "connector_type__name": "Zendesk", "customer_id": 29, "connector_authorization": {"pk": 27, "connector_type__name": "Zendesk"}, "update_daily": "disabled", "created_at": "2021-01-01T00:00:00Z", "configuration": {}, "schema": {"title": "", "type": "object", "properties": {"account": {"title": "Account", "type": "array", "items": {"type": "string"}}, "report_type": {"title": "Report Type", "type": "string"}}, "required": ["account", "report_type"]}}, "message": "success"}'

blob_as_dict=json.loads(my_blob)
```

## dumps() via dict - `json.dumps( json.loads(json_blob), indent=2, sort_keys=True)`

- WARNING: `sort_keys=True` is helpful for humans, but no longer has same ordering as original, so comparisons may need thing about. Could be good, could be bad!

```python
import json

my_blob=b'{"connector_input": {"pk": 23, "connector_type__name": "Zendesk", "customer_id": 29, "connector_authorization": {"pk": 27, "connector_type__name": "Zendesk"}, "update_daily": "disabled", "created_at": "2021-01-01T00:00:00Z", "configuration": {}, "schema": {"title": "", "type": "object", "properties": {"account": {"title": "Account", "type": "array", "items": {"type": "string"}}, "report_type": {"title": "Report Type", "type": "string"}}, "required": ["account", "report_type"]}}, "message": "success"}'
print(json.dumps( json.loads(json_blob), indent=2, sort_keys=True))
```
  
## Pretty Printing via dict - `PrettyPrinter().pprint(json.loads(json_blob))`

```python
import json
from pprint import PrettyPrinter

json_blob=b'{"connector_input": {"pk": 23, "connector_type__name": "Zendesk", "customer_id": 29, "connector_authorization": {"pk": 27, "connector_type__name": "Zendesk"}, "update_daily": "disabled", "created_at": "2021-01-01T00:00:00Z", "configuration": {}, "schema": {"title": "", "type": "object", "properties": {"account": {"title": "Account", "type": "array", "items": {"type": "string"}}, "report_type": {"title": "Report Type", "type": "string"}}, "required": ["account", "report_type"]}}, "message": "success"}'
print(PrettyPrinter().pprint(json.loads(json_blob)))
```

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

# Swap variable in place

```python
a = 23
b = 42

# The "classic" way to do it with a temporary variable:
tmp = a
a = b
b = tmp

# Python short-hand:
a, b = b, a
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

# The "timeit" module to measure the execution time of small bits of Python code

```python
>>> import timeit
>>> timeit.timeit('"-".join(str(n) for n in range(100))',
                  number=10000)

0.3412662749997253

>>> timeit.timeit('"-".join([str(n) for n in range(100)])',
                  number=10000)

0.2996307989997149

>>> timeit.timeit('"-".join(map(str, range(100)))',
                  number=10000)

0.24581470699922647
```
