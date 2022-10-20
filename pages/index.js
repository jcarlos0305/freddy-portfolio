import React, { useState } from "react";
import { Button, Space, Typography, Drawer } from "antd";

const { Title, Paragraph } = Typography;

const Home = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="main-content">
      <div className="fullscreen">
        <Title className="title">FREDDY SÁNCHEZ</Title>
        <Space>
          <Button className="button" onClick={showDrawer}>
            About
          </Button>
          <Button className="button" onClick={showDrawer}>
            Contact
          </Button>
          <Button className="button" onClick={showDrawer}>
            Instagram
          </Button>
        </Space>
        <Drawer
          placement="right"
          onClose={onClose}
          closable={false}
          open={open}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <Typography>
            <Paragraph>
              Born in 1993 in Costa Rica, Freddy Sánchez is a fine artist based
              in Spain.
            </Paragraph>
            <Paragraph>
              Having trained in Florence and Barcelona, he is interested in
              representing individuals in all their complexity, giving voice to
              the nuances and hidden qualities that inform their character.
            </Paragraph>
            <Paragraph>
              In his practice, he draws upon the world of literature to conjure
              personas, using narratives and fictional protagonists as a means
              through which to understand ourselves more deeply.
            </Paragraph>
          </Typography>
        </Drawer>
      </div>
    </div>
  );
};

export default Home;
