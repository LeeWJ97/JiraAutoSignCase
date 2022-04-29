var build = '这里填buildnum';

function sleep(time){
     return new Promise((resolve) => setTimeout(resolve, time));
}

async function run(){
	var $x = function (xpath, context) {
        var nodes = [];
        try {
            var doc = (context && context.ownerDocument) || window.document;
            var results = doc.evaluate(xpath, context || doc, null, XPathResult.ANY_TYPE, null);
            var node;
            while (node = results.iterateNext()) {
                nodes.push(node);
            }
        } catch (e) {
             throw e;
        }
        return nodes;
}

	$x('(//*[normalize-space(text())="Build Tested:"]/../*)[2]//*[@class="ktm-editable-field-icon-wrapper"]')[0].click();
	await sleep(1000);
	$x('//a[@title="'+build+'"]')[0].click();
	await sleep(1000);
	$x('//*[@ng-click="toggleTimer()"]')[0].click();
	await sleep(1000);
	for(i=0;i<10;i++){$x("//*[@class='ktm-result-details-single-view ng-scope']")[0].scrollBy(0,999999);await sleep(200);}
	await sleep(1000);
	var gougou = $x('//*[@ng-click="changeStatusTo(statusPass)"]');
	await sleep(1000);
	for(i=0;i<gougou.length;i++){gougou[i].click();await sleep(100);}
}
    
run();