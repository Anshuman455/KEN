<?php
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$email = $_POST['email'];
$number = $_POST['number'];
$textarea = $_POST['textarea'];

$conn = new mysqli('localhost','root','','ken');
if($conn->connect_error){
    die('connection failed :'.$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into feedback(firstname,lastname,email,number,textarea)
                    values(?,?,?,?,?)");
    $stmt->bind_param("sssis",$firstName,$lastName,$email,$number,$textarea);
    $stmt->execute();
    echo "Thank you for your feedback...";
    $stmt->close();
    $conn->close();
}
?>