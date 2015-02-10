# OnOffSwitch Extension for Qlikview

**_OnOffSwitch_** is a QlikView extension which allows you to change the value of a variable with a nice looking interface.

## Purpose and Description

* Use this extension to allow users to change the value of a variable with a nice looking interface (very similar to the experience on an iPad).
* You can use this extensions multiple time on each QlikView sheet to manipulate different variables.
* No need to code anything, all properties can be set in the extension's property dialog.
* Settings via extension's property dialog:
	* Name of the variable to be manipulated
	* Label for on/off status

## Download & Further Information

* Further information: http://www.qlikblog.at/1851/onoffswitch-qlikview-extension/
* [Latest version](https://github.com/stefanwalther/qvOnOffSwitch/raw/master/build/OnOffSwitch_latest.qar) (.qar file)
* QlikView Demo App


## Screenshots
Set your **properties** using the **extension's property dialog**:

![](https://raw.githubusercontent.com/stefanwalther/qvOnOffSwitch/gh-pages/images/OnOffSwitch_PropertyDialog_R.png)

Use **multiple instances** of this extension to your QlikView document:

![](https://raw.githubusercontent.com/stefanwalther/qvOnOffSwitch/gh-pages/images/OnOffSwitch_Demo_R.png)

Changes to the status of each extension will automatically change the value of the associated variable:

![](https://raw.githubusercontent.com/stefanwalther/qvOnOffSwitch/gh-pages/images/OnOffSwitch_DemoWithVars_R.png)

In a **real live scenario**, the On/Off switches could be used for:
* enabling/disabling sheets
* enabling/disabling sheet objects
* enabling/disabling dimensions

![](https://raw.githubusercontent.com/stefanwalther/qvOnOffSwitch/gh-pages/images/OnOffSwitch_RealWorldScenario_R.png)

## Instruction - How to use:

### Installation & Configuration

* Download the extension
* Install the extension on your local computer (doubleclick on the .qar file)
* Drag'n'Drop the extension within QlikView Desktop (using WebView)
* Set the desired properties:
	* Reference a variable to be changed
	* Set the label properties (by default they will be set to "On" and "Off")
	* Finally deploy the extension to your server (-> [detailed instruction](http://www.qlikblog.at/1597/qliktip-40-installingdeploying-qlikview-extensions))

### Behavior of the extension
* If the initial value of an extension cannot be recognized, the default value will be set to the "On" status, but the value of the variable will not be changed until the user first clicks on either "On" or "Off"
* The extension will change the values according to the selected status as follows
	* `On = 1`
	* `Off = 0`
* Changing the value for the "On" or "Off" label will not change the resulting variable value

## Credits
I have reviewed some implementations how to achieve a toggle switch using jQuery, Html and CSS. Finally I decided to use a very simple implementation by [Monji Dolon](http://linkedin.com/in/mdolon) posted on his [blog](http://devgrow.com/iphone-style-switches/). Thanks!