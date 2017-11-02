namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateAttributes : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Scenarios", "EventFormat_FormatID", "dbo.EventFormats");
            DropPrimaryKey("dbo.EventFormats");
            DropPrimaryKey("dbo.Scenarios");
            AlterColumn("dbo.EventFormats", "FormatID", c => c.Guid(nullable: false));
            AlterColumn("dbo.EventFormats", "Name", c => c.String(maxLength: 50));
            AlterColumn("dbo.Scenarios", "ScenarioID", c => c.Guid(nullable: false));
            AlterColumn("dbo.Scenarios", "Name", c => c.String(maxLength: 50));
            AddPrimaryKey("dbo.EventFormats", "FormatID");
            AddPrimaryKey("dbo.Scenarios", "ScenarioID");
            AddForeignKey("dbo.Scenarios", "EventFormat_FormatID", "dbo.EventFormats", "FormatID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Scenarios", "EventFormat_FormatID", "dbo.EventFormats");
            DropPrimaryKey("dbo.Scenarios");
            DropPrimaryKey("dbo.EventFormats");
            AlterColumn("dbo.Scenarios", "Name", c => c.String());
            AlterColumn("dbo.Scenarios", "ScenarioID", c => c.Guid(nullable: false, identity: true));
            AlterColumn("dbo.EventFormats", "Name", c => c.String());
            AlterColumn("dbo.EventFormats", "FormatID", c => c.Guid(nullable: false, identity: true));
            AddPrimaryKey("dbo.Scenarios", "ScenarioID");
            AddPrimaryKey("dbo.EventFormats", "FormatID");
            AddForeignKey("dbo.Scenarios", "EventFormat_FormatID", "dbo.EventFormats", "FormatID");
        }
    }
}
