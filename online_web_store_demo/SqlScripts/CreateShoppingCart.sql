CREATE TABLE [dbo].[ShoppingCart]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Created] DATETIME2 NOT NULL, 
    [Active] BIT NOT NULL, 
    [User_Id] NVARCHAR(128) NOT NULL
)
