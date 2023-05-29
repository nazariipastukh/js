const userCard=(num)=>{
    class UserCard {
        constructor(balance = 100, transactionLimit = 100, key, ...historyLogs) {
            this.balance = balance;
            this.transactionLimit = transactionLimit;
            this.historyLogs = historyLogs;
            this.key = num;
        }
        getCardOptions(){
            return {balance:this.balance,transactionLimit:this.transactionLimit,
                historyLogs:this.historyLogs,key:this.key};
        }
        putCredits(value){
            this.balance=value;
            this.historyLogs.push(new HistoryLogs('Received credits',value,new Date()));
        }
        setTransactionLimit(value){
            this.transactionLimit=value;
            this.historyLogs.push(new HistoryLogs('Transaction limit change',value,new Date()));
        }
        takeCredits(value){
            if (value<=this.transactionLimit && value<=this.balance){
                this.balance=this.balance-value;
                this.transactionLimit=this.transactionLimit-value;
            }else{
                if (value>this.transactionLimit && value<=this.balance){
                    return console.error('Credit is more than transaction limit');
                }else if(value> this.balance && value<=this.transactionLimit){
                    return console.error('Credit is more than balance');
                }
            }
            this.historyLogs.push(new HistoryLogs('Withdrawal of credits',value,new Date()));
        }
        transferCredits(value,card){
            if (value<=this.balance && value<=this.transactionLimit){
                this.balance=this.balance-value;
                this.transactionLimit=this.transactionLimit-value;
                card.balance=value-value*(0.5/100);
            }else{
                return console.error('Error');
            }
        }
    }
    class HistoryLogs{
        constructor(operationType,credits,operationTime){
            this.operationType=operationType;
            this.credits=credits;
            this.operationTime=operationTime;
        }
    }
    return new UserCard()
}

const card1=userCard(1);
const card2=userCard(2);
console.log(card1);
console.log(card1.getCardOptions());
card1.putCredits(20000);
console.log(card1.getCardOptions());
card1.setTransactionLimit(25000);
console.log(card1.getCardOptions());
card1.takeCredits(19000);
console.log(card1.getCardOptions());
console.log(card2);
card1.transferCredits(1000,card2);
console.log(card2.getCardOptions());
console.log(card1.getCardOptions());
