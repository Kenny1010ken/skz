function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hG501Kq3C/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}