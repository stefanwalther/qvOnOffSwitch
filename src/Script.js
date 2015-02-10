function OnOffSwitch_Init() {
    Qva.AddExtension("OnOffSwitch",
        function () {

            var _this = this;
            _this.SwitchOnOff = {};
            _this.SwitchOnOff.Label_Off = 'ON';     // default value
            _this.SwitchOnOff.Label_On = 'OFF';     // default value
            _this.SwitchOnOff.Version = '1.0';      // Current version
            _this.SwitchOnOff.VariableName = "";    // Just initialize

            _this.SwitchOnOff.UniqueId = this.Layout.ObjectId.replace("\\", "_");
            _this.SwitchOnOff.ExtensionLoaded = false;
            _this.SwitchOnOff.ExtensionName = "OnOffSwitch";


            // ***********************************************************************************************
            // Not necessary for this extension
            // ***********************************************************************************************
            //            var jsFiles = [];
            //            jsFiles.push('Extensions/' + _this.SwitchOnOff.ExtensionName + '/lib/js/OnOffSwitch.js');
            //            Qv.LoadExtensionScripts(jsFiles, function () {
            //                ExtensionOnUpdateComplete();
            //            });

            var cssFiles = [];
            cssFiles.push('Extensions/' + _this.SwitchOnOff.ExtensionName + '/lib/css/OnOffSwitch.css');
            for (var i = 0; i < cssFiles.length; i++) {
                Qva.LoadCSS(Qva.Remote + (Qva.Remote.indexOf('?') >= 0 ? '&' : '?') + 'public=only' + '&name=' + cssFiles[i]);
            }

            Extension_Load();

            function Extension_Load() {
                RetrieveSettings(function () {
                    RenderExtension();
                    _this.SwitchOnOff.ExtensionLoaded = true;
                });
            }

            function RetrieveSettings(fnCallBack) {
                _this.SwitchOnOff.VariableName = getQVStringProp(0);
                _this.SwitchOnOff.Label_On = getQVStringProp(1);
                _this.SwitchOnOff.Label_Off = getQVStringProp(2);

                RetrieveInitVarValue(fnCallBack);
            }

            function RetrieveInitVarValue(fnCallBack) {

                var qvDoc = Qv.GetCurrentDocument();
                qvDoc.GetAllVariables(function (vars) {

                    if (vars != null) {
                        for (var i = 0; i < vars.length; i++) {
                            var obj = vars[i];

                            if ((obj.isreserved == "false") && (obj.isconfig == "false")) {
                                ConsoleInfo(obj.name + ' = ' + obj.value);

                                if (obj.name.toLowerCase() == _this.SwitchOnOff.VariableName.toLowerCase()) {
                                    if (obj.value == "true" || obj.value == "1" || obj.value == "false" || obj.value == "0") {
                                        switch (obj.value.toString().toLowerCase()) {
                                            case "true":
                                            case "1":
                                                _this.SwitchOnOff.InitValue = 1;
                                                break;
                                            case "false":
                                            case "0":
                                                _this.SwitchOnOff.InitValue = 0;
                                                break;
                                        }
                                        //ConsoleLog("Return Value: " + _this.SwitchOnOff.InitValue);
                                        fnCallBack();
                                        return;
                                    }
                                }
                            }
                        }
                    }
                });
                // Default value
                _this.SwitchOnOff.InitValue = 1; // true
                fnCallBack();
            }


            function RenderExtension() {

                ConsoleLog("Value in RenderExtension: " + _this.SwitchOnOff.InitValue);

                // fastest way to remove the inner content
                $(_this.Element).empty();

                var divExt = $(document.createElement('div'));
                divExt.attr('id', 'divOnOffControl' + GetUniqueId());

                var p = $(document.createElement('p'));
                p.addClass('field');
                p.addClass('switch');

                var inputOn = $(document.createElement('input'));
                var idOn = 'input_SwitchOnOff_' + GetUniqueId() + '_On';
                inputOn.attr('type', 'radio');
                inputOn.attr('id', idOn);
                inputOn.attr('name', 'field');
                inputOn.attr('checked', (_this.SwitchOnOff.InitValue == "1"));
                p.append(inputOn);

                var inputOff = $(document.createElement('input'));
                var idOff = 'input_SwitchOnOff_' + GetUniqueId() + '_Off'
                inputOff.attr('type', 'radio');
                inputOff.attr('id', idOff);
                inputOff.attr('name', 'field');
                inputOff.attr('checked', (_this.SwitchOnOff.InitValue == "0"));
                p.append(inputOff);


                // Label On
                var lblOn = $(document.createElement('label'));
                lblOn.attr('for', idOn);
                lblOn.attr('id', 'Label_' + idOn);
                lblOn.addClass('cb-enable');
                if (_this.SwitchOnOff.InitValue == "1") {
                    lblOn.addClass('selected');
                }
                lblOn.css('cursor', 'pointer');

                var spanLabelOn = $(document.createElement('span'));
                spanLabelOn.html(_this.SwitchOnOff.Label_On);
                lblOn.append(spanLabelOn);

                p.append(lblOn);
                // (Label On)

                // Label Off
                var lblOff = $(document.createElement('label'));
                lblOff.attr('for', idOff);
                lblOff.attr('id', 'Label_' + idOff);
                lblOff.addClass('cb-disable');
                if (_this.SwitchOnOff.InitValue == "0") {
                    lblOff.addClass('selected');
                }

                var spanLabelOff = $(document.createElement('span'));
                spanLabelOff.html(_this.SwitchOnOff.Label_Off);
                lblOff.append(spanLabelOff);

                p.append(lblOff);
                // (Label Off)

                divExt.append(p);
                $(_this.Element).append(divExt);

                var imageUrl = Qva.Remote + (Qva.Remote.indexOf('?') >= 0 ? '&' : '?') + 'public=only' + '&name=Extensions/' + _this.SwitchOnOff.ExtensionName + '/lib/images/OnOffSwitch.gif';
                var imageCss = 'url(' + imageUrl + ')';
                $(".cb-enable").css('background-image', imageCss);
                $(".cb-enable").css('background-repeat', 'repeat-x');
                $(".cb-disable").css('background-image', imageCss);
                $(".cb-disable").css('background-repeat', 'repeat-x');
                $(".cb-enable > span").css('background-image', imageCss);
                $(".cb-disable > span").css('background-image', imageCss);

                $('#Label_' + idOn).click(function () {
                    var parent = $(this).parents('.switch');
                    $('.cb-disable', parent).removeClass('selected');
                    $(this).addClass('selected');
                    $('.checkbox', parent).attr('checked', true);
                    SetValue(1);
                });
                $('#Label_' + idOff).click(function () {
                    var parent = $(this).parents('.switch');
                    $('.cb-enable', parent).removeClass('selected');
                    $(this).addClass('selected');
                    $('.checkbox', parent).attr('checked', false);
                    SetValue(0);
                });

            }

            function SetValue(val) {
                var qvDoc = Qv.GetCurrentDocument();
                qvDoc.SetVariable(_this.SwitchOnOff.VariableName, val);
            }

            function GetVersion() {
                return _this.SwitchOnOff.Version;
            }

            function GetUniqueId() {
                return _this.SwitchOnOff.UniqueId;
            }

            // ------------------------------------------------------------------
            // Extension helper functions
            // ------------------------------------------------------------------
            function ConsoleLog(msg) {
                if (typeof console != "undefined") {
                    console.log(msg);
                }
            }
            function ConsoleInfo(msg) {
                if (typeof console != "undefined") {
                    console.info(msg);
                }
            }

            function getQVStringProp(idx) {

                var p = '';
                if (eval('_this.Layout.Text' + idx)) {
                    p = eval('_this.Layout.Text' + idx + '.text');
                }
                return p;
            }

        }
        )
};
OnOffSwitch_Init();


