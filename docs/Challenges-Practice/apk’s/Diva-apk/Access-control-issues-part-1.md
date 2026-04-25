So the challenge is to start the activity without clicking the view api credits so first i used 
`adb shell dumpsys window | grep mCurrentFocus`
to know which activity is alive on the screen and found its APICredsActvity
so used this start activity command
`adb shell am start -n jakhar.aseem.diva/jakhar.aseem.diva.APICredsActivity`
<empty-block/>
as developer we could solve this issue by simply setting the android exported activity as false
<empty-block/>