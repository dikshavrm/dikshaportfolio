<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$email = trim($request->email);
$phone = trim($request->phone);
$message_subject = trim($request->message_subject);
$message = trim($request->message);

// $password = mysqli_real_escape_string($mysqli, trim($request->password));
// $email = mysqli_real_escape_string($mysqli, trim($request->email));
$sql = "INSERT INTO contact(name,email,phone,message_subject,message) VALUES ('$name','$email','$phone','$message_subject','$message')";
echo $sql;
if ($mysqli->query($sql) === TRUE) {
    echo 'success';
$authdata = [
'name' => $name,
'email' => $email,
'phone' => $phone,
'message_subject' => $message_subject,
'message' => $message,
'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
else{
    echo 'fail';
}
}
?>