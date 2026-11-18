const id=new URLSearchParams(location.search).get('entry');
if(id&&/^(space|time|temperature|elements|mass)\.[a-z0-9_-]+$/.test(id)){const notice=document.createElement('p');notice.className='notice';notice.textContent='你正在准备修订：'+id;document.querySelector('.article-lead').after(notice);}
