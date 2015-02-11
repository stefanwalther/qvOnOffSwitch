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
* [QlikView Demo App using OnOffSwitch](https://github.com/stefanwalther/qvOnOffSwitch/raw/gh-pages/demo/OnOffSwitch_QlikView_DemoApp_v1.0.qvw)


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

## Potential Improvements & Ideas

*[ ] Probably I could add more layouts/themes
*[ ] Offer more possibilities than just On/Off (like radio buttons), e.g. small, small, regular, large, larger
*[ ] Add the possibility to disable the control
*[ ] Add the functionality to change target values, so on only 0 for Off and 1 for On, but e.g. 1 for Off and 1000 for Off

## Contributing & Issues
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/stefanwalther/qvOnOffSwitch/issues).

## Author

**Stefan Walther**
* [qlikblog.at](http://www.qlikblog.at)
* [github.com/stefanwalther](http://github.com/stefanwalther)
* [twitter.com/waltherstefan](http://twitter.com/waltherstefan)

## License

The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).

See [Additional license information for this solution.](https://github.com/stefanwalther/qvOnOffSwitch/blob/master/LICENSE.md)