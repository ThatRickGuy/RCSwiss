namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.EventFormats",
                c => new
                    {
                        FormatID = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.FormatID);
            
            CreateTable(
                "dbo.Scenarios",
                c => new
                    {
                        ScenarioID = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                        EventFormat_FormatID = c.Guid(),
                    })
                .PrimaryKey(t => t.ScenarioID)
                .ForeignKey("dbo.EventFormats", t => t.EventFormat_FormatID)
                .Index(t => t.EventFormat_FormatID);
            
            CreateTable(
                "dbo.Factions",
                c => new
                    {
                        FactionID = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.FactionID);
            
            CreateTable(
                "dbo.Metas",
                c => new
                    {
                        MetaID = c.Guid(nullable: false, identity: true),
                        Country = c.String(),
                        Province = c.String(),
                        City = c.String(),
                    })
                .PrimaryKey(t => t.MetaID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Scenarios", "EventFormat_FormatID", "dbo.EventFormats");
            DropIndex("dbo.Scenarios", new[] { "EventFormat_FormatID" });
            DropTable("dbo.Metas");
            DropTable("dbo.Factions");
            DropTable("dbo.Scenarios");
            DropTable("dbo.EventFormats");
        }
    }
}
