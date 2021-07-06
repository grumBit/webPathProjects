# Thonny and Raspberry Pi Pico<!-- omit in toc -->

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Getting started](#1-getting-started)
  - [Install Thonny](#install-thonny)
  - [Setup Thonny for Pico](#setup-thonny-for-pico)
- [2. Run `Python` live in a shell](#2-run-python-live-in-a-shell)
- [3. Auto-run a `Python` file on reboot using `main.py`](#3-auto-run-a-python-file-on-reboot-using-mainpy)

<!-- /code_chunk_output -->

---

## 1. Getting started

### Install Thonny

- Download the Mac install `pkg` from <https://thonny.org/>
  - I picked `thonny-xxl-3.3.11.pkg`, with `-xxl-` in the file name which adds some useful extra Python packages
- Run the `pkg` file to install Thonny

### Setup Thonny for Pico

- Plug the Pico into the Mac
- Start Thonny
- On the menu bar click `Tools` -> `Options...`, then in the `Interpreter` tab;
  - Select `MicroPython (Raspeberry Pi Pico)`
  - (Leave the `Port` in auto-detect mode)
  - On a new Pico, it will pop up a firware update dialog. If it doesn't, click the `Install or update firmware` link and follow the instructions. NB: Only keep pressing the `BOOTSEL` button for a few seconds after plugging in

## 2. Run `Python` live in a shell

- Plug in the Pico and start Thonny
- Click the red `Stop/Restart backend` up the top
  - _You should see `MicorPython v`... stuff pop up in the shell, and a `>>>` shell prompt at the bottom_
- The shell should now be up and running.
- Try running something like this;

  ```python
  >>> from machine import Pin
  >>> led = Pin(25, Pin.OUT) # <- This is the led on the Pico's board
  >>> led.toggle()
  >>> led.toggle()
  >>> led.value(1)
  >>> led.value(0)
  ```

## 3. Auto-run a `Python` file on reboot using `main.py`

- Plug in the Pico and start Thonny
- Click the red `Stop/Restart backend` up the top
  - _You should see `MicorPython v`... stuff pop up in the shell, and a `>>>` sheel prompt at the bottom_
- On the menu bar click `File` -> `New`
- Type (or cut-n-paste) in a program like this led-flash program;

  ```python
  from machine import Pin
  import utime
  led = Pin(25, Pin.OUT)  # <- This is the led on the Pico's board
  led.low()

  while True:
    led.toggle()
    utime.sleep(0.2)
  ```

- On the menu bar click `File` -> `Save as...`
- In the `Where to save to?` dialog, click `Raspberry Pi Pico`
- Save with the filename `main.py`
- On the menu bar click `Run` -> `Disconnect`
  - NB: I think this is needed as an `eject` type-o-thing so it's falsh drive isn't damaged
- Unplug then plug the Pico back in
