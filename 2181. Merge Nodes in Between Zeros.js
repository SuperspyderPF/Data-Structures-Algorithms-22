var mergeNodes = function(head) {
    let result = new ListNode();
    let temp = result;
    
    while(head){
        if(head.val === 0 && head.next){
            temp.next = new ListNode(0);
            temp = temp.next;
        }
        
        temp.val += head.val;
        head = head.next;
    }
    
    return result.next;
    
};