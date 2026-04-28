# Different flags in frida
## Connection Flags (Where is the device?)
These flags tell Frida which device or emulator you want to talk to.
- **`U`**** (USB):** The most common flag. It tells Frida to look for a device connected via USB or an emulator running on your local machine.
- **`H`**** (Host):** Used for remote debugging. If your Frida server is running on a specific IP address (e.g., a phone on the same Wi-Fi), you would use `H 192.168.1.15:27042`.
- **`D`**** (Device ID):** If you have **multiple** phones/emulators connected, `U` will fail because it doesn't know which one to pick. You use `D <device_id>` (get the ID from `adb devices`) to target a specific one.
---
## 2. Targeting Flags (Which app/process?)
Once Frida knows which device to use, it needs to know which app to inject your script into.
### **`f`**** (Spawn)**
- **Action:** Starts the app from a "cold boot."
- **Use Case:** Use this when you want to hook things that happen immediately when the app opens (like `onCreate` or early security checks).
- **Note:** By default, Frida "suspends" the app at the first instruction. You have to type `%resume` in the terminal or use the `-no-pause` flag to let the app actually start.
- **Example:** `frida -U -f com.example.app`
### **`n`**** (Name)**
- **Action:** Attaches to an **already running** process using its name.
- **Use Case:** Use this when the app is already open on your screen and you just want to inject logic without restarting it.
- **Risk:** If the name has spaces (like "Frida 0x2"), it can be tricky for the terminal to parse.
### **`p`**** (PID)**
- **Action:** Attaches to an **already running** process using its unique Process ID number.
- **Use Case:** The "fail-safe" option. If the name or identifier isn't working, the PID always works.
- **Example:** `frida -U -p 1234`
### **`N`**** (Identifier)**
- **Action:** Attaches to a running process using its package identifier (e.g., `com.ad2001.frida0x2`).
- **Note:** This is often more reliable than `n`.
---
## 3. Scripting and Utility Flags
### **`l`**** (Load Script)**
- **Action:** Loads your `.js` file into the process. Without this, Frida just gives you an empty interactive shell.
- **Example:** `frida -U -f com.example.app -l my_hook.js`
### **`frida-ps`**** (Process Status)**
- **Action:** This isn't a flag for the `frida` command, but a separate tool to list processes.
- **`U`**: List processes on the USB device.
- **`a`**: List **applications** specifically (usually gives you the Name and Identifier).
- **`i`**: List all installed packages, even if they aren't running.

# How frida works
The  app contains specific functions. When we want to apply our own logic to
 those functions, we use Frida's dynamic instrumentation.
We run Frida server, which lets our script connect to the rooted Android process and inject into the app's memory space.
We specify the exact class and method we want to intercept. Frida installs hooks by writing **JMP instructions** at the target function's entry point.
When the app calls that function, the **JMP triggers first**—Frida's `onEnter` callback executes **before** the original function body.
The app takes a **detour**: our script runs in the background, then Frida jumps back to let the **original function continue executing**.
Since this happens at the **machine instruction level**
 in the background, the app remains unaware that our script intercepted 
the call. The function completes normally and the app continues to the 
next operations seamlessly.

# How frida handles the main thread
### Option 1
`Java.performNow()` attaches the current thread to the Java VM, ensuring Java operations can execute safely.
We use `Java.choose()` and specify the target **class name** (like `com.example.MainActivity`). Frida scans the **target app's Java heap memory** for live instances of that class.
`onMatch` is the callback function of `Java.choose()`. It receives each **live instance** as a parameter and gives us access to the real objects currently running in the app.
We can then modify those live objects using our Frida script.
### Option 2
use `Java.schedulesOnMainThread(function(){     });`
