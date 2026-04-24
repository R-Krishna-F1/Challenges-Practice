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
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/cfc35fd0-3f71-47ac-980c-5e995206d102/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDO22EWN%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE7pPvb3WNCSe%2FVKXOOIcR8eJExRCKrdiUz32zELmDSAiBA7%2FgQ7AlxC0Xy%2FLkFUQeK%2FGJedwSadYBjeZEg4qJlgir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrbt0uHXFjikELk%2FxKtwDIpiGEAbuR%2B6RFvmjIEewBswtzT1VM8%2Br1Dr2%2FXhcyhlSoye8U2NY%2BJ4OLQ6CRilCP%2BXwhSo8jvclc5TJnmIkM4IyZGoQkvlQ4mJnidI6qRY1blxXCsu3c1UQPJUIHbOvmxPQDbY2mNMixnLdVKzHMvPa%2FwUDHAm3Wt4wjYdiXk90jNgoncIu38wdCfTnbqut7KUs9YZMTezkhyNCwSPPnmwThgbQRuhcnITGu87uFxkQPXGSk40dWNYe8XSVicdIgKvO92GC1%2F0bUjL86QzuXJ5t%2BrVFLbqWptjLxTZJyRGP7pTqiIWn03%2F3qu8BMqwJuYWj%2FLMxP4n8oF1onNfNkem6etJpwnh0WKUDBehZSZfggn3LaNDKMLuAY6lbKAdHOU1MBLModAh%2Fl0sW90FS11NoEnKY%2FCwZAaLwWm%2FNYHcEbRu6AuP%2BYyOr8HhEFW%2FuTtIuxhSJmnHll%2Fq%2BHDn73sw0J%2Ft3lqtz9DGWyaX%2FZwbuJQOk3%2BXM67tPM6%2FmYGuyjarxCgbNbbMiuo1ByZf%2FhX9fpjhtYafTlPlA3fLWiMBaKFD33YQkpKK5ygo8rRRYDtjcee9mCMHIvQcxK9HA9ZYscu6sO8ifIgPyyxwbiHkTbT0ZiRJa1jyJtDUwgvOqzwY6pgENRuoNZCZ27qV8qarHq1%2FuNw8%2Ffg0siooOZen5RVI91QhMAPm5r%2F74zLoDZFHdre5L6k9Rr%2BZvCcfPOCrBnbinZM3dUWVRmPq4tzq6EfA3Zl6iTAyUnFpePnk8sQU1BVWnebjrLRITaNtFqV6OIXAvHGyWZ3KyE8EDM5V6dZy9s8WN4W9qMA7H672N0eQ4dYUxfSMh2adnYIERXnsk8MW2%2BIYQMvmN&X-Amz-Signature=1d61ea414cd60f136a87cdbf69aea6f00cb95610584db25f03122cdc29881709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the jadx is
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/ec28e2ab-4e45-43d3-8caf-94a8c14de4b6/Screenshot_From_2026-04-12_16-14-40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDO22EWN%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE7pPvb3WNCSe%2FVKXOOIcR8eJExRCKrdiUz32zELmDSAiBA7%2FgQ7AlxC0Xy%2FLkFUQeK%2FGJedwSadYBjeZEg4qJlgir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrbt0uHXFjikELk%2FxKtwDIpiGEAbuR%2B6RFvmjIEewBswtzT1VM8%2Br1Dr2%2FXhcyhlSoye8U2NY%2BJ4OLQ6CRilCP%2BXwhSo8jvclc5TJnmIkM4IyZGoQkvlQ4mJnidI6qRY1blxXCsu3c1UQPJUIHbOvmxPQDbY2mNMixnLdVKzHMvPa%2FwUDHAm3Wt4wjYdiXk90jNgoncIu38wdCfTnbqut7KUs9YZMTezkhyNCwSPPnmwThgbQRuhcnITGu87uFxkQPXGSk40dWNYe8XSVicdIgKvO92GC1%2F0bUjL86QzuXJ5t%2BrVFLbqWptjLxTZJyRGP7pTqiIWn03%2F3qu8BMqwJuYWj%2FLMxP4n8oF1onNfNkem6etJpwnh0WKUDBehZSZfggn3LaNDKMLuAY6lbKAdHOU1MBLModAh%2Fl0sW90FS11NoEnKY%2FCwZAaLwWm%2FNYHcEbRu6AuP%2BYyOr8HhEFW%2FuTtIuxhSJmnHll%2Fq%2BHDn73sw0J%2Ft3lqtz9DGWyaX%2FZwbuJQOk3%2BXM67tPM6%2FmYGuyjarxCgbNbbMiuo1ByZf%2FhX9fpjhtYafTlPlA3fLWiMBaKFD33YQkpKK5ygo8rRRYDtjcee9mCMHIvQcxK9HA9ZYscu6sO8ifIgPyyxwbiHkTbT0ZiRJa1jyJtDUwgvOqzwY6pgENRuoNZCZ27qV8qarHq1%2FuNw8%2Ffg0siooOZen5RVI91QhMAPm5r%2F74zLoDZFHdre5L6k9Rr%2BZvCcfPOCrBnbinZM3dUWVRmPq4tzq6EfA3Zl6iTAyUnFpePnk8sQU1BVWnebjrLRITaNtFqV6OIXAvHGyWZ3KyE8EDM5V6dZy9s8WN4W9qMA7H672N0eQ4dYUxfSMh2adnYIERXnsk8MW2%2BIYQMvmN&X-Amz-Signature=e47fafb4592b6b2685d320d6ed9ee624fdf3f257a2e9a8e88ecf5437dd655a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>