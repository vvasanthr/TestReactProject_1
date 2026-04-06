resource "aws_instance" "vasanth_EC2" {
    ami = "ami-0c94855ba95c71c99"
    instance_type = var.instance_type["dev"]
    tags = {
        Name = "vasanth_EC2"
    }
}