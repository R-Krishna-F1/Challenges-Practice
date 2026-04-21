This challenge is combination of all the challenges we did till now since the conditions that are required get the flag are in another class so we have to change them and the main function to get the flag is in oncreate method and it is in main activity
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/67aa5c35-548b-4fe4-bb82-8c0914b09cbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676L45CPV%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCCSFQL%2FLgAL66FNnWM6JRVs1ZB%2B2ZFpbJkAh78CG%2FSYQIhANcnygUcdAC38SQHAx369NYDBEVomZa6Hyee%2FqJRqB%2FvKv8DCDsQABoMNjM3NDIzMTgzODA1IgxrYX5BWB0OIe1BXnMq3AO0GHyBcDzwHGZWfRSLMCxcCssP8fq7NiQIO4FvnIhcvz1LLgzszSf1EuC774bnBMfKDkooELIUhYkgBtOoEjra3VABgf%2FwlPbHp8JKF8OcmCx1zAWrfuA6CuLpJa%2BsfMjZQWJaLmJjh%2FmcOGIgGX7cIPgQql%2FtDC92bkKbXe9y3bOrOOFWwvj3Raue1prHPBmhHn0HUjxiOemCVPpInkx6uhrLcGMZ%2BBffHpbJeCCHexTwtIYLm%2F4%2FaMyErUujv6XzzYampAdFyP9KPHNjXYfROElFYk5MX2SBXEOKY%2FdTC2%2FuTrIwbcS2ANZluy08qadETAWh3UDivGhXTuG8XvAl3Vjey1OJGsCL683e4QFaBmKljST5c3vL%2Fn%2FcFdMRG10XRGOYHimfJCQVqh%2BEotdQTASzmpgOIX%2BFFA%2FCQjmSqEqDIxiuQCnGtS2Ir7KEgEq5NtiBBqv%2BrP5sUZpPM4THFAUw9Vx8tvGE9%2BGf3IbggdtZnwqNhHindiw7gH19K4neml3Ur9tlXB97v9QxGmxRywyDqTCt6tbsqvzxRpH3sHbONliAP68plgrjt8JvTLJV%2FV9qUaKC2%2FMlte6aP1z2d7FkKEEBcb3aaczP%2Fa%2Fposo8w1UMjdazp%2F7dMDCl%2BJ7PBjqkAaeyLMTCtOIUpItYBdBQJzp4uNdZfndtvVOMYUdZVHMrvDYN7ugTImWX6lCVwtb7L4Ee7oDUtLStbqhnRcxGIYZ9n6HJnZSokPQnwB%2FVlwRcucZKy%2Ff9zQFJOcXK4kZwfkCINDA0EsrmEogc5F14zDXoYdUUtlNYtCkFdN0DpS%2FPRCvCGmSnupwN7NK%2FVcC9Uy7riKbmCuelYm5pJSvthLkZVooJ&X-Amz-Signature=28c4620df67005dc3e5f9c7114d1a69f44657519341580d18a0645b322857172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
checker class
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/5d91c805-fa64-4aeb-8295-a70be5296d3f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676L45CPV%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCCSFQL%2FLgAL66FNnWM6JRVs1ZB%2B2ZFpbJkAh78CG%2FSYQIhANcnygUcdAC38SQHAx369NYDBEVomZa6Hyee%2FqJRqB%2FvKv8DCDsQABoMNjM3NDIzMTgzODA1IgxrYX5BWB0OIe1BXnMq3AO0GHyBcDzwHGZWfRSLMCxcCssP8fq7NiQIO4FvnIhcvz1LLgzszSf1EuC774bnBMfKDkooELIUhYkgBtOoEjra3VABgf%2FwlPbHp8JKF8OcmCx1zAWrfuA6CuLpJa%2BsfMjZQWJaLmJjh%2FmcOGIgGX7cIPgQql%2FtDC92bkKbXe9y3bOrOOFWwvj3Raue1prHPBmhHn0HUjxiOemCVPpInkx6uhrLcGMZ%2BBffHpbJeCCHexTwtIYLm%2F4%2FaMyErUujv6XzzYampAdFyP9KPHNjXYfROElFYk5MX2SBXEOKY%2FdTC2%2FuTrIwbcS2ANZluy08qadETAWh3UDivGhXTuG8XvAl3Vjey1OJGsCL683e4QFaBmKljST5c3vL%2Fn%2FcFdMRG10XRGOYHimfJCQVqh%2BEotdQTASzmpgOIX%2BFFA%2FCQjmSqEqDIxiuQCnGtS2Ir7KEgEq5NtiBBqv%2BrP5sUZpPM4THFAUw9Vx8tvGE9%2BGf3IbggdtZnwqNhHindiw7gH19K4neml3Ur9tlXB97v9QxGmxRywyDqTCt6tbsqvzxRpH3sHbONliAP68plgrjt8JvTLJV%2FV9qUaKC2%2FMlte6aP1z2d7FkKEEBcb3aaczP%2Fa%2Fposo8w1UMjdazp%2F7dMDCl%2BJ7PBjqkAaeyLMTCtOIUpItYBdBQJzp4uNdZfndtvVOMYUdZVHMrvDYN7ugTImWX6lCVwtb7L4Ee7oDUtLStbqhnRcxGIYZ9n6HJnZSokPQnwB%2FVlwRcucZKy%2Ff9zQFJOcXK4kZwfkCINDA0EsrmEogc5F14zDXoYdUUtlNYtCkFdN0DpS%2FPRCvCGmSnupwN7NK%2FVcC9Uy7riKbmCuelYm5pJSvthLkZVooJ&X-Amz-Signature=af315e887d1c144ef7abda989a19de0cc9d92b38bc5b2ad4bb038b86e51649d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
so the java script code goes like
```javascript
Java.performNow(function() {
  Java.choose('com.ad2001.frida0x6.MainActivity', {
    onMatch: function(instance) {
      console.log("Instance found");
      var checker = Java.use("com.ad2001.frida0x6.Checker");
      var checker_obj  = checker.$new();  
      checker_obj.num1.value = 1234; 
      checker_obj.num2.value = 4321; 
      instance.get_flag(checker_obj);
    },
    onComplete: function() {}
  });
});
```
<empty-block/>