namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateAttributesOtherModels : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Factions");
            DropPrimaryKey("dbo.Metas");
            AlterColumn("dbo.EventFormats", "Name", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.Scenarios", "Name", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.Factions", "FactionID", c => c.Guid(nullable: false));
            AlterColumn("dbo.Factions", "Name", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.Metas", "MetaID", c => c.Guid(nullable: false));
            AlterColumn("dbo.Metas", "Country", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.Metas", "Province", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.Metas", "City", c => c.String(nullable: false, maxLength: 50));
            AddPrimaryKey("dbo.Factions", "FactionID");
            AddPrimaryKey("dbo.Metas", "MetaID");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Metas");
            DropPrimaryKey("dbo.Factions");
            AlterColumn("dbo.Metas", "City", c => c.String());
            AlterColumn("dbo.Metas", "Province", c => c.String());
            AlterColumn("dbo.Metas", "Country", c => c.String());
            AlterColumn("dbo.Metas", "MetaID", c => c.Guid(nullable: false, identity: true));
            AlterColumn("dbo.Factions", "Name", c => c.String());
            AlterColumn("dbo.Factions", "FactionID", c => c.Guid(nullable: false, identity: true));
            AlterColumn("dbo.Scenarios", "Name", c => c.String(maxLength: 50));
            AlterColumn("dbo.EventFormats", "Name", c => c.String(maxLength: 50));
            AddPrimaryKey("dbo.Metas", "MetaID");
            AddPrimaryKey("dbo.Factions", "FactionID");
        }
    }
}
