variable "instance_type" {
    description = "create instance type"
    type = map(string)
    default = {
        "dev" = "t3.micro"
        "prod" = "t2.medium"
    }
}