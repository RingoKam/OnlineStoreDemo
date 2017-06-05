CREATE TABLE [dbo].[CartContent]
(
	[Id] INT NOT NULL, 
    [ProductId] INT NOT NULL 
	CONSTRAINT FK_ProductId FOREIGN KEY REFERENCES Products(Id), 
    [ShoppingCartId] INT NOT NULL  
	CONSTRAINT FK_ShoppingCardId FOREIGN KEY REFERENCES ShoppingCart(Id), 
    [Qty] INT NOT NULL, 
    [Active] BIT NOT NULL, 
    [Created] DATETIME2 NOT NULL 
)
