function Bridge(element,clientId='page',targetId='extension') {
    if(!element){
        return;
    }

    const listeners = {};

    this.sendMessage = function (type,data,callback) {
        if(typeof callback === 'function'){
            listeners[type] = callback;
        }
        element.innerText = JSON.stringify({
            data:data,
            type:type,
        });
        const customEvent = document.createEvent('Event');
        customEvent.initEvent('send_to_'+targetId, true, true);
        element.dispatchEvent(customEvent);
    };


    this.addListener = function (type,fun) {
        listeners[type] = fun;
    };

    element.addEventListener('send_to_'+clientId,(e)=>{
        const eventData = element.innerText;
        let requestData = {type:'',data:{}};
        try{
            requestData = JSON.parse(eventData)
        }catch (e) {

        }
        const listener = listeners[requestData.type];
        if(listener){
            listener(requestData);
        }
    })
}

export default Bridge;