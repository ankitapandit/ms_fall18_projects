isWindows=-1<navigator.platform.indexOf("Win"),isWindows?($(".sidebar .sidebar-wrapper, .main-panel").perfectScrollbar(),$("html").addClass("perfect-scrollbar-on")):$("html").addClass("perfect-scrollbar-off"),transparent=!0,transparentDemo=!0,fixedTop=!1,navbar_initialized=!1,backgroundOrange=!1,sidebar_mini_active=!1,toggle_initialized=!1;var is_iPad=null!=navigator.userAgent.match(/iPad/i),scrollElement=-1<navigator.platform.indexOf("Win")?$(".main-panel"):$(window);function hexToRGB(a,e){var i=parseInt(a.slice(1,3),16),n=parseInt(a.slice(3,5),16),o=parseInt(a.slice(5,7),16);return e?"rgba("+i+", "+n+", "+o+", "+e+")":"rgb("+i+", "+n+", "+o+")"}seq=0,delays=80,durations=500,seq2=0,delays2=80,durations2=500,$(document).ready(function(){0==$(".full-screen-map").length&&0==$(".bd-docs").length&&$(".collapse").on("show.bs.collapse",function(){$(this).closest(".navbar").removeClass("navbar-transparent").addClass("bg-white")}).on("hide.bs.collapse",function(){$(this).closest(".navbar").addClass("navbar-transparent").removeClass("bg-white")}),nowuiDashboard.initMinimizeSidebar(),$navbar=$(".navbar[color-on-scroll]"),scroll_distance=$navbar.attr("color-on-scroll")||500,0!=$(".navbar[color-on-scroll]").length&&(nowuiDashboard.checkScrollForTransparentNavbar(),$(window).on("scroll",nowuiDashboard.checkScrollForTransparentNavbar)),$(".form-control").on("focus",function(){$(this).parent(".input-group").addClass("input-group-focus")}).on("blur",function(){$(this).parent(".input-group").removeClass("input-group-focus")}),$(".bootstrap-switch").each(function(){$this=$(this),data_on_label=$this.data("on-label")||"",data_off_label=$this.data("off-label")||"",$this.bootstrapSwitch({onText:data_on_label,offText:data_off_label})})}),$(document).on("click",".navbar-toggle",function(){$toggle=$(this),1==nowuiDashboard.misc.navbar_menu_visible?($("html").removeClass("nav-open"),nowuiDashboard.misc.navbar_menu_visible=0,setTimeout(function(){$toggle.removeClass("toggled"),$("#bodyClick").remove()},550)):(setTimeout(function(){$toggle.addClass("toggled")},580),div='<div id="bodyClick"></div>',$(div).appendTo("body").click(function(){$("html").removeClass("nav-open"),nowuiDashboard.misc.navbar_menu_visible=0,setTimeout(function(){$toggle.removeClass("toggled"),$("#bodyClick").remove()},550)}),$("html").addClass("nav-open"),nowuiDashboard.misc.navbar_menu_visible=1)}),$(window).resize(function(){seq=seq2=0,0==$(".full-screen-map").length&&0==$(".bd-docs").length&&($navbar=$(".navbar"),isExpanded=$(".navbar").find('[data-toggle="collapse"]').attr("aria-expanded"),$navbar.hasClass("bg-white")&&991<$(window).width()?0==scrollElement.scrollTop()&&$navbar.removeClass("bg-white").addClass("navbar-transparent"):$navbar.hasClass("navbar-transparent")&&$(window).width()<991&&"false"!=isExpanded&&$navbar.addClass("bg-white").removeClass("navbar-transparent")),is_iPad&&$("body").removeClass("sidebar-mini")}),nowuiDashboard={misc:{navbar_menu_visible:0},initMinimizeSidebar:function(){0!=$(".sidebar-mini").length&&(sidebar_mini_active=!0),$("#minimizeSidebar").click(function(){$(this);1==sidebar_mini_active?($("body").removeClass("sidebar-mini"),sidebar_mini_active=!1,nowuiDashboard.showSidebarMessage("Sidebar mini deactivated...")):($("body").addClass("sidebar-mini"),sidebar_mini_active=!0,nowuiDashboard.showSidebarMessage("Sidebar mini activated..."));var a=setInterval(function(){window.dispatchEvent(new Event("resize"))},180);setTimeout(function(){clearInterval(a)},1e3)})},showNotification:function(a,e){color="primary",$.notify({icon:"now-ui-icons ui-1_bell-53",message:"Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer."},{type:color,timer:8e3,placement:{from:a,align:e}})}};