# Chapter 3: Connecting with rclpy (Python Client Library)

The `rclpy` library is ROS 2's Python client. It allows you to write ROS 2 nodes using Python, making it easy for AI engineers to integrate their models and algorithms with a robot's communication system. This chapter will conceptually demonstrate how `rclpy` is used to create nodes, publish data, and subscribe to information from other parts of the robot.

## Conceptual Code Snippet: Minimal Publisher

```python
# This is a conceptual snippet and not meant to be run directly.
# It illustrates how an rclpy node might publish data.

import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello, ROS 2! %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```
