ne.util.defineNamespace("fedoc.content", {});
fedoc.content["AppLoader.html"] = "<div id=\"main\" class=\"main\">\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        AppLoader\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n<dt>\n    \n        <h4 class=\"name\" id=\"AppLoader\">\n            <span class=\"type-signature\"></span>new AppLoader<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 15</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n    <div class=\"container-members\">\n        <h3 class=\"subsection-title\">Members</h3>\n\n        <dl>\n            \n<dt>\n    <h4 class=\"name\" id=\"defaults\">\n        <span class=\"type-signature\"></span>defaults<span class=\"type-signature\"></span>\n        \n        <div class=\"container-source members\">\n            <code>file</code>,\n            <code>line 32</code>\n        </div>\n        \n    </h4>\n\n    \n</dt>\n<dd>\n    \n    <div class=\"description\">\n        <p>default options to run exec</p>\n    </div>\n    \n\n    <!--\n    \n    -->\n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    <h4 class=\"name\" id=\"detector\">\n        <span class=\"type-signature\"></span>detector<span class=\"type-signature\"></span>\n        \n        <div class=\"container-source members\">\n            <code>file</code>,\n            <code>line 24</code>\n        </div>\n        \n    </h4>\n\n    \n</dt>\n<dd>\n    \n    <div class=\"description\">\n        <p>browser, device detector</p>\n    </div>\n    \n\n    <!--\n    \n    -->\n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    <h4 class=\"name\" id=\"os\">\n        <span class=\"type-signature\"></span>os<span class=\"type-signature\"></span>\n        \n        <div class=\"container-source members\">\n            <code>file</code>,\n            <code>line 28</code>\n        </div>\n        \n    </h4>\n\n    \n</dt>\n<dd>\n    \n    <div class=\"description\">\n        <p>OS (android/ios/etc)</p>\n    </div>\n    \n\n    <!--\n    \n    -->\n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n</dd>\n\n        </dl>\n    </div>\n    \n\n    \n    <div class=\"container-methods\">\n        <h3 class=\"subsection-title\">Methods</h3>\n\n        <dl>\n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_runDetector\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_runDetector<span class=\"signature\">(context)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 137</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Run selected detector</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>context</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>The information for app</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_setAndroidDetector\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_setAndroidDetector<span class=\"signature\">(context)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 107</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Set android Detector</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>context</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>The information for app</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_setDetector\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_setDetector<span class=\"signature\">(context)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 64</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Set os by Detector</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>context</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>The options</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_setEtcDetector\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_setEtcDetector<span class=\"signature\">(context)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 122</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Set EtcDetector</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>context</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>The information for app</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_setIOSDetector\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_setIOSDetector<span class=\"signature\">(context)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 85</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Set IOS Detector</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>context</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>The information for app</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_setTimerTime\">\n            <span class=\"type-signature\"></span>_setTimerTime<span class=\"signature\">(timerSet)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 228</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Set timer time set</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>timerSet</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>A set of timer times</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"exec\">\n            <span class=\"type-signature\"></span>exec<span class=\"signature\">(options)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 201</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Call app</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>options</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>The option for app</p>\n                <h6>Properties:</h6>\n                \n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>name</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>An application name</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>ios</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>IOS app information</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>android</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Android information</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>timerSet</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>A timer time set for callback deley time</p></td>\n        </tr>\n\n    \n    </tbody>\n</table>\n            </td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n        <h5>Example</h5>\n        \n    <pre class=\"prettyprint\"><code>var loader = new tui.component.AppLoader();\nloader.exec({\n     name: 'app', // application Name (ex. facebook, twitter, daum)\n     ios: {\n         scheme: 'fecheck://', // iphone app scheme\n         url: 'itms-apps://itunes.apple.com/app/.....' // app store url,\n         useIOS9: true,\n         syncIOS9: false\n     },\n     android: {\n         scheme: 'intent://home#Intent;scheme=fecheck;package=com.fecheck;end' // android intent uri\n     },\n     timerSet: {\n         ios: {\n             long: 3000,\n             short: 2000\n         },\n         and: 1000\n     },\n     notFoundCallback: function() {\n         alert('not found');\n     },\n     etcCallback: function() {\n         alert('etc');\n     }\n });</code></pre>\n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"getOS\">\n            <span class=\"type-signature\"></span>getOS<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {string}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 161</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Get os</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n    \n<span class=\"param-type\">string</span>\n\n\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"init\">\n            <span class=\"type-signature\"></span>init<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 52</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Initialize</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"isIntentLess\">\n            <span class=\"type-signature\"></span>isIntentLess<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {boolean}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 147</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Whether intent supported</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n    \n<span class=\"param-type\">boolean</span>\n\n\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        </dl>\n    </div>\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"