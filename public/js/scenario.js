var $boolean = false;

$(function() {
	var $tabItem = $( ".main-tab__item" ),
			$headerLogo = $( "#header__logo" );

	$tabItem.click(function(e) {
		$tabItem.each(function(tabEl) {
			$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		});
	
		setTimeout(callFunction, 1);

		$( this ).addClass( "main-tab__item--active" );
	});

	$headerLogo.click(function(e) {
		$tabItem.each(function(tabEl) {
			$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		});	
		$( $tabItem[0] ).addClass( "main-tab__item--active" );
	});

	$tabItem.each(function(tabEl) {
		$tabItem[tabEl].classList.remove( "main-tab__item--active" );
		if ( $tabItem[tabEl].children[0].pathname == window.location.pathname ) {
			$tabItem[tabEl].classList.add( "main-tab__item--active" );
		}
	});

	callFunction();

	function callFunction() {
		if ( window.location.pathname == "/question" ) {
			$questionHead = $( ".question__head" );
			$questionHead.click(function(e) {
				$questionHead.each(function(el) {
					$( $questionHead[el] ).next().hide( "slow" );
				});
				$el = $( this ).next();
				$el.slideToggle();
			});
		}
	}

	var $headerGeolocationButton = $( ".header__geolocation-button" );

	$headerGeolocationButton.click(function() {
		$( this ).next().slideToggle();
		$( this ).toggleClass( "header__geolocation-button--inverted" );
	});

	var $objCity = {
		"А": {
			0: "Алтайский край",
			1: "Амурская область",
			2: "Архангельская область",
			3: "Астраханская область",
		},
		"Б": {
			0: "Белгородская область",
			1: "Брянская область",
		},
		"В": {
			0: "Владимирская область",
			1: "Вологодская область",
		},
		"З": {
			0: "Забайкальский край"
		},
		"И": {
			0: "Ивановская область"
		},
		"К": {
			0: "Кабардино-Балкарская"
		}
	}

	var $strCity = "",
			$elGeo = "",
			$elActive = ""; 

	for (var k in $objCity) {
		for (var i in $objCity[k]) {
			if ( $strCity != k ) {
				if ( "header__geolocation-item--active" != $elActive ) {
					$elActive = "header__geolocation-item--active";
					$elGeo += `
					<li class="header__geolocation-item ${$elActive}">
		      	<span class="header__geolocation-abc" abc="a">${k}</span>
		      	<span class="header__geolocation-city" city="c">${$objCity[k][i]}</span>
		      </li>`;
		    } else {
		    	$elGeo += `
					<li class="header__geolocation-item">
		      	<span class="header__geolocation-abc" abc="a">${k}</span>
		      	<span class="header__geolocation-city" city="c">${$objCity[k][i]}</span>
		      </li>`;	
		    }
	      $strCity = k;
			} else {
				$elGeo += `
				<li class="header__geolocation-item">
	      	<span class="header__geolocation-city" city="c">${$objCity[k][i]}</span>
	      </li>`;
			}
		}
	}
	var $headerGeolocationList = $( ".header__geolocation-list" );

	$headerGeolocationList.html( $elGeo );

	var $headerGeolocationItem = $( ".header__geolocation-item" );
	$headerGeolocationItem.click(function() {
		$headerGeolocationItem.each(function(e) {
			$( $headerGeolocationItem[e] ).removeClass( "header__geolocation-item--active" );
		});
		var $txt = $( this ).children( ".header__geolocation-city" ).text(),
				$txtBtn = $( ".header__geolocation-button" );
		$txtBtn.text( $txt );
		$( this ).closest( ".header__geolocation-block" ).hide();
		$( this ).addClass( "header__geolocation-item--active" );
	});
});