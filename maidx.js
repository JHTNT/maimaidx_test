javascript:
(
	function(j,f,dom)
	{
		j=['in_lv_dxplus.js',
		   'maidx_comp_data.js'];
		dom='https://raw.githubusercontent.com/JHTNT/maimaidx_test/master/scripts_maimai/';
		f=function(s,u)
		{
			if(j.length==0)
			{
				return;
			}
			u=dom+j.shift()+'?'+Date.now();
			s=document.createElement('script');
			document.body.appendChild(s);
			s.charset='UTF-8';
			s.addEventListener('load',f);
			s.src=u;
		};
		(document.readyState=='loading')?document.addEventListener('DOMContentLoaded',f):f();
	}
)();
