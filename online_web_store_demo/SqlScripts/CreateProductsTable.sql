CREATE TABLE [dbo].[Products]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] VARCHAR(50) NOT NULL, 
    [Description] VARCHAR(500) NULL, 
    [ThumbNail] VARCHAR(2000) NULL, 
    [FullImage] VARCHAR(2000) NULL, 
    [Price] DECIMAL(18, 2) NOT NULL, 
    [Created] DATETIME2 NOT NULL
)
