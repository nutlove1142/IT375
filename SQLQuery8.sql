-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE SalaryLevel 
	-- Add the parameters for the stored procedure here
	
AS
BEGIN
	--Declare variable
	Declare @sName varchar(20),
	        @rSalary real,
			@sText varchar(20);

    --Declare cursor
	DECLARE cursor_empsalary cursor for
	select EmpFname,EmpSalary from Employee

	--open cursor

	print 'Salary Report'
	print 'Name-----Salary-----Result'
	open cursor_empsalary
	fetch next from cutsor_empsalary
	into @sName,@rSalary

	
	if (@rSalary <30000)
	   set @sText = 'low Salary'
	else if(@rSalary < 40000)
	   set @sText = 'medium salary'
    else 
	   set @sText = 'high Salary'
    print @sName + '----' + cast(@rSalary as varchar(10)) + '----'+@stext

	--loop from cursor
	while (@@FETCH_STATUS = 0)
	begin
	  
	  FETCH NEXT FROM cursor_empsalary -- Fetch next cursor
INTO @sName, @rSalary

-- Print Data from Cursor
 if (@rSalary <30000)
	   set @sText = 'low Salary'
	else if(@rSalary < 40000)
	   set @sText = 'medium salary'
    else 
	   set @sText = 'high Salary'
    print @sName + '----' + cast(@rSalary as varchar(10)) + '----'+@stext
END


-- Close cursor
CLOSE cursor_empsalary ;


-- Deallocate cursor
DEALLOCATE cursor_empsalary ;

	   
END
GO
