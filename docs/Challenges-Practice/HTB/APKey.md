If we look at the app it asks for a username and password if we look at jadx the username is admin and the password is a md5 hash there is no way to decrypt a hash so we will use frida we start the frida server and launch frida and paste our script in frida repl
the script is
```javascript
Java.perform(function() {
    var String = Java.use('java.lang.String');
    String.equals.overload('java.lang.Object').implementation = function(other) {
        try {
            if (other.toString() === 'a2a3d412e92d896134d9c9126d756f') {
                console.log('[*] Bypassed!');
                return true;
            }
        } catch(e) {
            // ignore
        }
        return this.equals(other);
    };
    console.log('[*] Hook ready, now enter admin + any password');
});
```
so when you run the script we get the flag as a toast message
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/cfc35fd0-3f71-47ac-980c-5e995206d102/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBTM34D%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlVIC3PviAG6RF7TJKeuAuFjZr87h5yLgFXoTvqpzxkwIgIWEoIW5JbGF72NJVs2eiBvV6q5cfr5SdbrgfBHZwGgAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDESVUcynp7uAnz1TLyrcA4SdjSxquwmj9atEjR8K7Iz7RSxJPCItO0sK1B%2BtACVfYYts5XcPlbPlaRqMVrV%2FzpzxfbZ2kvY3tnNiBMgPIBPWK4GLZo9BYAN1qHGPEJv2CE7BWaip69JX5obxRsZyY0BwXluCl5%2BzfyM%2BW1aOQgbcydikeUBl0emQvJfiZYGyWkTFFrAVALKkNsiUHvS8%2FBDrdMGAvxUEQcHzjkr8t6Kc%2BKPA5j7oLHAjACRTo9aFH7jqcbhT1VUFHwAaw16K1mIzzxBFBts0tP4A56zyPf3lfHmHI1MFYcV6f7TTX3mV%2BaL4C0F8UXPy%2FDoKpi6tXkkzWUn5931gSlkI8S%2B4wngIvIr4EDcFyrUqPahmkhZldEJQhRUiigVA21n9r7axauwpmjjOD1ChsJzdZP%2FzV7XLxE6hz52EK96LySL0o5phxyZEvecQiPVKRm2oQxj%2F0s5xyUTvZUviMPO3RpJzaPD%2FzYyrAL8UBFLQENfCRFeeNz3esd3rdMiRv30j2P0KmLHNywVCXXXiVN8bXXBCJZ07CnT1MybKll7Dx%2BusqrgYN6avLAVI7ri%2FTkmynOdI%2F0W7c5d1qhTLmVprByvJ%2FEOGK5sXOpI9maEokRWOMjBWJxnSsLRabL4UGG1nMI%2BZps8GOqUBjeOO1huUjrZVFsV9sTv5OYB1xKdQ02FlyQQGTJvSLAda5f381MlZT7oExfSCKBa2WgEb3DJRXGiTGNQi%2B1zNuNJ9G99h0Xjra7FCntJh5Ys1%2FdOWVFMWbNuUTJhQXgrV0YZL08eWIMkZ0LjiFlA6YQ0SWpJm%2FhhrOqfV1PBXGPTDeLPlsF1njCDaUwnoIj69d0t9Ky4x0aTE%2B3%2B6iQH0WYBwR%2Fgb&X-Amz-Signature=1fd79fcd011356d0d89dc62cde75af2f4651b16df321e187c843244551767a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the jadx is
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/ec28e2ab-4e45-43d3-8caf-94a8c14de4b6/Screenshot_From_2026-04-12_16-14-40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBTM34D%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlVIC3PviAG6RF7TJKeuAuFjZr87h5yLgFXoTvqpzxkwIgIWEoIW5JbGF72NJVs2eiBvV6q5cfr5SdbrgfBHZwGgAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDESVUcynp7uAnz1TLyrcA4SdjSxquwmj9atEjR8K7Iz7RSxJPCItO0sK1B%2BtACVfYYts5XcPlbPlaRqMVrV%2FzpzxfbZ2kvY3tnNiBMgPIBPWK4GLZo9BYAN1qHGPEJv2CE7BWaip69JX5obxRsZyY0BwXluCl5%2BzfyM%2BW1aOQgbcydikeUBl0emQvJfiZYGyWkTFFrAVALKkNsiUHvS8%2FBDrdMGAvxUEQcHzjkr8t6Kc%2BKPA5j7oLHAjACRTo9aFH7jqcbhT1VUFHwAaw16K1mIzzxBFBts0tP4A56zyPf3lfHmHI1MFYcV6f7TTX3mV%2BaL4C0F8UXPy%2FDoKpi6tXkkzWUn5931gSlkI8S%2B4wngIvIr4EDcFyrUqPahmkhZldEJQhRUiigVA21n9r7axauwpmjjOD1ChsJzdZP%2FzV7XLxE6hz52EK96LySL0o5phxyZEvecQiPVKRm2oQxj%2F0s5xyUTvZUviMPO3RpJzaPD%2FzYyrAL8UBFLQENfCRFeeNz3esd3rdMiRv30j2P0KmLHNywVCXXXiVN8bXXBCJZ07CnT1MybKll7Dx%2BusqrgYN6avLAVI7ri%2FTkmynOdI%2F0W7c5d1qhTLmVprByvJ%2FEOGK5sXOpI9maEokRWOMjBWJxnSsLRabL4UGG1nMI%2BZps8GOqUBjeOO1huUjrZVFsV9sTv5OYB1xKdQ02FlyQQGTJvSLAda5f381MlZT7oExfSCKBa2WgEb3DJRXGiTGNQi%2B1zNuNJ9G99h0Xjra7FCntJh5Ys1%2FdOWVFMWbNuUTJhQXgrV0YZL08eWIMkZ0LjiFlA6YQ0SWpJm%2FhhrOqfV1PBXGPTDeLPlsF1njCDaUwnoIj69d0t9Ky4x0aTE%2B3%2B6iQH0WYBwR%2Fgb&X-Amz-Signature=c3299ee6d10449611aca67ea6e9b6d874f43316e823c5ca025156a81990d4272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>