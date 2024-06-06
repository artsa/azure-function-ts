variable "tf_state_azure_resource_group" { type = string }
variable "tf_state_azure_storage_account" { type = string }
variable "tf_state_azure_storage_container" { type = string }
variable "resource_group_name" { type = string }
variable "location" { type = string }

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3"
    }
  }

  backend "azurerm" {
    resource_group_name  = var.tf_state_azure_resource_group
    storage_account_name = var.tf_state_azure_storage_account
    container_name       = var.tf_state_azure_storage_container
    key                  = "terraform.tfstate"
    use_oidc             = true
  }
}

provider "azurerm" {
  features {}
  use_oidc = true
}

# Define any Azure resources to be created here. A simple resource group is shown here as a minimal example.
resource "azurerm_resource_group" "rg-http-function" {
  name     = var.resource_group_name
  location = var.location
}