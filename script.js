//Esse método chama a função setClock de 1 em 1 segundo (1000ms)
setInterval(setClock, 10)

//Busca no documento e salva nas constantes os elementos físicos dos ponteiros no HTML
const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

//Essa função serve para definir quais os valores de cada ponteiro
function setClock()
{
    const currentDate = new Date()                                          //Cria um novo objeto Date que pega o valor de tempo atual do sistema
    const milisecondsRatio = currentDate.getMilliseconds() / 1000           //Eu pego o valor de milisegundos para adicionar no ponteiro de segundos e ter um movimento suave
    const secondsRatio = (milisecondsRatio + currentDate.getSeconds()) / 60 //Pega o valor de segundos atuais e divide por 60 para obter um valor francionário entre 0 e 1
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60     //Pega o valor de minutos atuais e divide por 60 para obter a fração de onde o ponteiro deve estar, mas adiciona os segundos para fazer isso gradualmente
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12         //Pega o valor de horas atuais e divide por 60 para obter a fração de onde o ponteiro deve estar, mas adiciona os minutos para fazer isso gradualmente

    setRotation(secondHand, secondsRatio)                                   //Chama a função 'setRotation' e passa o ponteiro e o valor que ele deve estar
    setRotation(minuteHand, minutesRatio)                                   //Chama a função 'setRotation' e passa o ponteiro e o valor que ele deve estar
    setRotation(hourHand, hoursRatio)                                       //Chama a função 'setRotation' e passa o ponteiro e o valor que ele deve estar
}

//Essa função serve para passar para os ponteiros físicos do HTML a posição de cada um.
//Ela recebe como parametro o ponteiro que vai ser modificado e o valor que ele deve estar
function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)            //Como o valor que recebo é entre 0 e 1, multiplico por 360 para achar o angulo certo dele
}

//Chama essa função uma vez no início para não precisar esperar 1 segundo inteiro para o relógio atualizar ao carregar a página
setClock()