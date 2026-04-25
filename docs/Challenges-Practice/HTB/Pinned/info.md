for disabiling ssl validation and bypass certificate pinning we use frida to disable it
we create our own keystore and that particular function is used to sign tthe apk
to perform our script i runtime we need to command
frida -U -f \<package-name\> -l \<script-name\>.js
Java.enumerateMethods(\*Platform!*checkServerTrusted*")
You’ve got the workflow exactly right! Think of it like a heist: Frida is the locksmith that disables the alarm, and HTTP Toolkit is the getaway driver waiting to pick up the goods.
Here is how that process looks in practice:
1. The Setup: "Neutralizing the Sensors"
When you run your Frida script, you aren't changing the app's code on the disk. Instead, you are performing dynamic instrumentation.
As the app runs and reaches the m2461w() method (where it tries to set up the "Safe" and the "Secure Tunnel"), Frida intercepts those calls. Your script will essentially tell the app: "Whatever certificate you see, just say it's fine."
1. The Interception: "The Man-in-the-Middle"
Once Frida has "blinded" the app's security checks, you can route the traffic through HTTP Toolkit.
Normally, the app would see HTTP Toolkit’s certificate, realize it isn't the "pinned" one, and crash.
With Frida active, the app ignores the mismatch and proceeds to send the data.
1. The Payoff: "Finding the Flag"
Once you click the login button with bnavarro and the long password:
The app runs its hidden AES decryption.
It creates a POST request to [https://pinned.com/pinned.php](https://pinned.com/pinned.php).
HTTP Toolkit will catch this request.
Look at the Request Body (the "Inspect" tab in most tools).
The pass= field will no longer be 1234567890987654; it will be the decrypted flag string.
The "Hooking" Strategy
In your Frida script, you'll likely want to target one of these common points:
javax.net.ssl.TrustManagerFactory: To return a "dummy" trust manager that trusts everything.
okhttp3.CertificatePinner: (If the app used OkHttp, though this specific code uses standard HttpsURLConnection).
The custom check: In the code you provided, the check happens inside RunnableC0755b. You could hook java.security.cert.Certificate.equals() to always return true.
Expert Tip: Since this code uses StrictMode.setThreadPolicy, it’s designed to be a bit "noisy." Make sure your Frida server is running with root permissions on your emulator or device, or the script won't have the authority to hook the system classes.
Do you have a specific Frida script ready, or do you need help identifying which method is the best one to "hook" for this specific Java code?