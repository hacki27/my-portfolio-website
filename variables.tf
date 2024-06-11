resource "azurerm_storage_account" "cloudk-portfolio" {
  name                     = "cloudkkportfolio27"
  resource_group_name      = azurerm_resource_group.cloudk-rg.name
  location                 = azurerm_resource_group.cloudk-rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  static_website {
    index_document = "index.html"
  }
}

resource "azurerm_storage_blob" "website" {
  for_each             = fileset("${path.module}/dist", "**/*")
  name                 = each.value
  storage_account_name = azurerm_storage_account.cloudk-portfolio.name
  storage_container_name = "$web"
  type                 = "Block"
  source               = "${path.module}/dist/${each.value}"
  content_type         = {
    "index.html"                = "text/html"
    "assets/index.html"         = "text/html"
    "assets/user.png"           = "image/png"
    "assets/vite.svg"           = "image/svg+xml"
    "assets/ai-DFHd1q8i.jpg"   = "image/jpeg"
    "assets/Designer-CXNJLwQc.jpeg" = "image/jpeg"
    "assets/p1-7ejPx5m5.png"    = "image/png"
    "assets/project-2-Dsim69lq.jpg" = "image/jpeg"
    "assets/user-_Dp8MxnH.png" = "image/png"
    "assets/index-ahd9ZVb9.js"  = "application/javascript"
    "assets/index-DMYYvpWj.css" = "text/css"
    # Add MIME type for "user.png"
    "user.png"                  = "image/png"
    # Add MIME type for "vite.svg"
    "vite.svg"                  = "image/svg+xml"
    # Add more MIME type mappings as needed
  }[each.value]
}
