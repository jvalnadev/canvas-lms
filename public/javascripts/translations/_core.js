var I18n = I18n || {};
(function($) {
  var translations = {"en":{"datetime":{"prompts":{"day":"Day","second":"Seconds","month":"Month","year":"Year","minute":"Minute","hour":"Hour"},"distance_in_words":{"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"half_a_minute":"half a minute","about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"}}},"time":{"due_date":"%{date} by %{time}","am":"am","unknown_date":"Unknown date","ranges":{"different_days":"%{start_date_and_time} to %{end_date_and_time}","times":"%{start_time} to %{end_time}","same_day":"%{date} from %{start_time} to %{end_time}"},"with_ago":"%{time} ago","pm":"pm","event":"%{date} at %{time}","formats":{"tiny_on_the_hour":"%l%P","default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M","tiny":"%l:%M%P"}},"date":{"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"days":{"yesterday":"Yesterday","tomorrow":"Tomorrow","today":"Today", "today_lower":"today"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"formats":{"weekday":"%A","default":"%Y-%m-%d","medium":"%b %e, %Y","long":"%B %d, %Y","short":"%b %e"},"order":["year","month","day"]},"number":{"precision":{"format":{"delimiter":""}},"percentage":{"format":{"delimiter":""}},"currency":{"format":{"separator":".","precision":2,"format":"%u%n","delimiter":",","unit":"$"}},"format":{"separator":".","precision":3,"delimiter":","},"human":{"format":{"precision":1,"delimiter":""},"storage_units":{"units":{"gb":"GB","tb":"TB","kb":"KB","byte":{"one":"Byte","other":"Bytes"},"mb":"MB"},"format":"%n %u"}}}}};
  if (I18n.translations) {
    $.extend(true, I18n.translations, translations);
  } else {
    I18n.translations = translations;
  }
})(jQuery);
