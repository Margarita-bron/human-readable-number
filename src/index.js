module.exports = function toReadable (numb) {
        var len = String(numb).length;
        const words = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve','thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine','twenty'];
            
                if (len===3) return three_numb(numb, words);
                if (len===2) return two_numb(numb, words);
                if (len===1) return one_numb(numb, words);
            
                //10-19
            function two_begin_numb(numb, words){
                let intro='';
                if(numb >= 10 && numb <= 12){
                    intro = words[numb];
                }
                else if(numb === 14) intro = words[4]+'teen';
                else intro = words[numb]+'teen';
                return intro;
            }
            
            //20-99
            function two_decade_numb(numb, words){
               let lip = String(numb).split('');
               let intro ='';
                if(numb>=20 && numb<=29) intro = words[20] +' ';
                else{
                    let r = 10+Number(lip[0]);
                    intro = words[r]+'ty' + ' ';
                }
                return intro;
            }
        
            function one_numb(numb, words){
                if(numb===0) return 'zero'
                else return words[numb];
            }
            
            function two_numb(numb, words){
                let lip = String(numb).split('');
                let w = '';
                if(numb<=19) {
                    w = two_begin_numb(numb, words);
                }
                else {
                    if(lip[1]===0) w =two_decade_numb(numb, words);
                    else{
                        w = two_decade_numb(numb, words) + one_numb(lip[1], words);
                    }
                }
            
                return w.trim();
            }
            
            function three_numb(numb, words){
                let lip = String(numb).split('');
                let w = '';
                let hundred = Number(lip[0])*100;
                let numbr = numb - hundred;
            
                let first = one_numb(lip[0], words)+ ' '+'hundred'+' ';
                let second = '';
                if(numbr === 0){second = '';}
                else if (numbr>0&&numbr<10){second = one_numb(numbr, words);}
                else{second = two_numb(numbr, words);}
            
                w = first + second;
                return w.trim();
            }
        }
    













