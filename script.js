document.addEventListener("DOMContentLoaded", function() {


    function submitResolution() {

        let name = document.getElementById('name').value;

        console.log('Submit button clicked');
        var resolution = document.getElementById('select').value;

        console.log(resolution);

        var responseElement = document.getElementById('responseMessage');
        switch (resolution) {
            case 'Read more books':
                responseElement.innerHTML = `${name} here's your tip : Set a goal for reading certain number of books throughout the year try to read the books based on life events of great personalities`;
                break;
            case 'Learn new skill':
                responseElement.innerHTML = `${name} here's your tip : Pick up a skill you wish to master and start to learn it`;
                break;
            case 'Be more organized':
                responseElement.innerHTML = `${name} here's your tip : Clean up physical spaces around you and be wise to yourself to organize things around you throughout the life`;
                break;
            case 'Improve time management':
                responseElement.innerHTML = `${name} here's your tip : Create schedules, prioritize tasks and learn how to better manage your time`;
                break;
            case 'Exercise Regularly':
                responseElement.innerHTML = `${name} here's your tip : Start a consistent workout daily routine whether it's running, walking, yoga or weight training`;
                break;
            case 'Eat healthier':
                responseElement.innerHTML = `${name} here's your tip : Focus on eating healthy foods like fruits and vegetables try to avoid junk food as much as possible`;
                break;
            case 'Reduce stress':
                responseElement.innerHTML = `${name} here's your tip : Spend more time in nature and meditate yourself daily to reduce stress also spend some quality time with your loved ones to reduce stress`;
                break;
            case 'Be more patient and understanding':
                responseElement.innerHTML = `${name} here's your tip : Work on your communication and empathy skills`;
                break;
            case 'Spend time with loved ones':
                responseElement.innerHTML = `${name} here's your tip : Try to spare some time from your daily routine to spend it with your family and friends`;
                break;
            case 'Start some physical activity':
                responseElement.innerHTML = `${name} here's your tip : Step outside from your comfort zone and try to engage yourself in activities like hiking, bungee jumping or taking art class`;
                break;
            case 'Travel to new places':
                responseElement.innerHTML = `${name} here's your tip : Plan a trip to places you always wanted to visit`;
                break;
            case 'Live in clean and green environment':
                responseElement.innerHTML = `${name} here's your tip : Try to reduce waste around you and your soceity visit nursery and buy few plants and take care of them at home`;
                break;
            case 'Reduce screen time':
                responseElement.innerHTML = `${name} here's your tip : Set limits on your screen time and try to engage yourself into physical activities`;
                break;

            default:
                responseElement.innerHTML = `${name} here's your tip : Stay consistent and try to complete your resolution`;
        }
        document.getElementById('responseMessage').style.display = 'block';
        document.getElementByClassName('form1').disabled = true;

        setTimeout(function() {
            document.getElementById('responseMessage').style.display = 'none';
            document.getElementByClassName('form1').disabled = false;
        }, 20000);
    }
    document.getElementById('button').addEventListener('click', submitResolution);
});    