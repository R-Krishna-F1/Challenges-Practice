### Flag1
opened the android manifest xml to check the activities which are exported as true and found there is an secret actvity so we can start that activity manually 
`adb shell am start -n io.hextree.reversingexample/.SecretActivity`**<br>**using this command and we get the flag HXT\{A-not-so-secret-activity\}
### Flag2
for this challenge we have to set UnreachableActivity to true in the decompiled java code and then use api signature to rebuild the app 
every file before turning into an apk needs a signature so that android trusts you that it came from a verified author
the command used to decompile the apk is 
apk d \<path_to_your_apk\>
the command used to rebuild the decompiled and changed the application is 
<details>
<summary>build the app using the command java -jar apktool_2.10.0.jar b \<file_name_of_decompiled_file\> -o \<build_application_name\></summary>
</details>
<details>
<summary>zipalign -v 4 \<build_sapplication_name\>.apk \<new_signed_application_name\>.apk</summary>
</details>
<details>
<summary>keytool -genkey -v -keystore research.keystore -alias research_key -keyalg RSA -keysize 2048 -validity 10000       used for building my own key </summary>
</details>
<details>
<summary>apksigner sign --ks research.keystore --ks-key-alias research_key --out \<final_signed_application_name\>.apk \<newly_signed_application_name\>.apk</summary>
</details>
to sign the modified apk with my key
since we intentionally set the unreachable activity to true we can start it using 
adb shell am start -n io.hextree.reversingexample/.UnreachableActivity
found the flag HXT\{I-thought-I-am-unreachable\}
## Flag3
installed jadx 
and decompiled the app using jadx to view the source code
Found the main activity through android manifest.xml
found the class for which its going to compare the password iAmHardcoded and entered it in the app got the flag HXT\{hardcoded-secrets-are-bad\}
### Flag 4
Found that after we clear the main activity we go to loggedin activity
and found the string which it compares to and since its R.strings it should be in resources file
we used global search to find the string VeryResourceflSecret and submitted it to the app to get the next flag HXT\{resources-are-no-match-for-me\}
### Flag 5
Found that after logged in activity you will go to SecondPassword activity
and found the logic where we find the comparision of users inputs text and exact texts are comparing
since the compared passwords are in native library its hard to find them
so i tried to search strings from every native file in the terminal using
strings \<path to file\> and the password is nativeSecretsCanBeFoundToo
submitted the password to the app and got the 3rd flag HXT\{from-java-to-native\}
### Flag6
In this challenge there is a toast message that its making when we click the enter on zip code so when we find that where that log message is appearing we could find that logic and in that actvity class the api key is hardcoded and in the format of the flag 
<empty-block/>